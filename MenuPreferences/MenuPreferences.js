
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderOfMenuPreferenceComponent } from '../HeaderOfMenuPreference/HeaderOfMenuPreference';
import { AP_Districts_dropdown } from "../AP_Districts_DropDown/AP_Districts_DropDown";

export const MenuPreferenceComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://api.eenadu.net/newmobileapis/hometabs.php/?stateid=99')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

 

  //  ----------------------------------------------------------------------//

  const renderRow = ({ item }) => {
    const rowItems = item.map((dropdownItem) => {
      const imageUrl = dropdownItem.icon;
      // console.log("response data === :", { item })
      return (
        <TouchableOpacity
          key={dropdownItem.tabid}
          style={styles.dropdownItem}
          onPress={() => handleOptionSelect(dropdownItem.telname)}
        >
          <View style={styles.dropdownSubItem}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.dropdownItemText}>{dropdownItem.telname}</Text>
            <Icon
              name={selectedOptions.includes(dropdownItem.telname) ? "checkbox-outline" : "square-outline"}
              size={20}
              color="blue"
            />
          </View>
        </TouchableOpacity>
      );
    });

    
// -------------------------------------------Checking----------------------//
    return (
      <View style={styles.row}>{rowItems}</View>
    );
  };

  const renderFlatList = () => {
    if (!data.response) {
      return null; // Return null or loading indicator while data is being fetched
    }

    const numberOfRows = Math.ceil(data.response.length / 3);
    const rows = Array.from({ length: numberOfRows }, (_, index) => {
      const startIndex = index * 3;
      const endIndex = startIndex + 3;
      return data.response.slice(startIndex, endIndex);
    });

    return (
      <FlatList
        data={rows}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderOfMenuPreferenceComponent />
      {renderFlatList()}
     <AP_Districts_dropdown />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownItemText: {
    marginLeft: 10,
    color: 'black',
  },
  dropdownSubItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    margin: 2,
    width: 110,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '95%',
    justifyContent: 'space-around',
    height: 60,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  itemText: {
    marginLeft: 20,
    color: 'black',
  },
});


