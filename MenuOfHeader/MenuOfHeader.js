
// import React, { useState, useEffect } from "react";
// import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { HeaderOfMenuPreferenceComponent } from '../HeaderOfMenuPreference/HeaderOfMenuPreference';
// import { AP_Districts_dropdown } from "../AP_Districts_DropDown/AP_Districts_DropDown";
// import { ScrollView } from "react-native-gesture-handler";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// export const MenuOfHeader = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     fetch('https://api.eenadu.net/newmobileapis/hometabs.php/?stateid=99')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleOptionSelect = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(selectedOptions.filter(item => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };



//   //  ----------------------------------------------------------------------//

//   const renderRow = ({ item }) => {
//     const rowItems = item.map((dropdownItem) => {
//       const imageUrl = dropdownItem.icon;
//       // console.log("response data === :", { item })
//       return (
//         <TouchableOpacity
//           key={dropdownItem.tabid}

//           onPress={() => handleOptionSelect(dropdownItem.telname)}
//         >
//           <View style={styles.dropdownSubItem}>
//             <Image
//               source={{ uri: imageUrl }}
//               style={styles.image}
//             />
//             <Text style={styles.textItem} >{dropdownItem.telname}</Text>

//           </View>
//         </TouchableOpacity>
//       );
//     });


//     // -------------------------------------------Checking----------------------//
//     return (
//       <View >{rowItems}</View>
//     );
//   };

//   const renderFlatList = () => {
//     if (!data.response) {
//       return null; // Return null or loading indicator while data is being fetched
//     }

//     const numberOfRows = Math.ceil(data.response.length / 3);
//     const rows = Array.from({ length: numberOfRows }, (_, index) => {
//       const startIndex = index * 3;
//       const endIndex = startIndex + 3;
//       return data.response.slice(startIndex, endIndex);
//     });

//     return (
//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     );
//   };

//   return (
//     <SafeAreaView>

//       <ScrollView>

//         <View style={styles.container} >
//           {renderFlatList()}

//         </View>
//       </ScrollView>
//     </SafeAreaView>


//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     width: 200,
//   },
//   image: {
//     width: 30,
//     height: 30,
//     margin: 15
//   },
//   dropdownSubItem: {
//     flexDirection: 'row'
//   },
//   textItem: {
//     fontSize: 15,
//     fontWeight: '800',
//     margin: 15,
//     color: 'black'
//   }

// });





// import React, { useState, useEffect } from "react";
// import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { HeaderOfMenuPreferenceComponent } from '../HeaderOfMenuPreference/HeaderOfMenuPreference';
// import { AP_Districts_dropdown } from "../AP_Districts_DropDown/AP_Districts_DropDown";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// export const MenuOfHeader = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://api.eenadu.net/newmobileapis/hometabs.php/?stateid=99')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const handleOptionSelect = (option) => {
//     if (selectedOptions.includes(option)) {
//       setSelectedOptions(selectedOptions.filter(item => item !== option));
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const renderRow = ({ item }) => {
//     const rowItems = item.map((dropdownItem) => {
//       const imageUrl = dropdownItem.icon;
//       return (
//         <TouchableOpacity
//           key={dropdownItem.tabid}
//           onPress={() => handleOptionSelect(dropdownItem.telname)}
//         >
//           <View style={styles.dropdownSubItem}>
//             <Image
//               source={{ uri: imageUrl }}
//               style={styles.image}
//             />
//             <Text style={styles.textItem}>{dropdownItem.telname}</Text>
//           </View>
//         </TouchableOpacity>
//       );
//     });

//     return <View>{rowItems}</View>;
//   };

//   const renderFlatList = () => {
//     if (!data.response) {
//       return null;
//     }

//     const numberOfRows = Math.ceil(data.response.length / 3);
//     const rows = Array.from({ length: numberOfRows }, (_, index) => {
//       const startIndex = index * 3;
//       const endIndex = startIndex + 3;
//       return data.response.slice(startIndex, endIndex);
//     });

//     return (
//       <FlatList
//         data={rows}
//         renderItem={renderRow}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView>
//         <View style={styles.container}>
//           {renderFlatList()}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     width: 200,
//   },
//   image: {
//     width: 30,
//     height: 30,
//     margin: 15
//   },
//   dropdownSubItem: {
//     flexDirection: 'row'
//   },
//   textItem: {
//     fontSize: 15,
//     fontWeight: '800',
//     margin: 15,
//     color: 'black'
//   }
// });




import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';



export const MenuOfHeader = () => {
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

  const renderRow = ({ item }) => {
    const rowItems = item.map((dropdownItem) => {
      const imageUrl = dropdownItem.icon;
      return (
        <TouchableOpacity
          key={dropdownItem.tabid}
          onPress={() => handleOptionSelect(dropdownItem.telname)}
        >
          <View style={styles.dropdownSubItem}>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.textItem}>{dropdownItem.telname}</Text>
          </View>
        </TouchableOpacity>
      );
    });

    return <View>{rowItems}</View>;
  };

  const renderFlatList = () => {
    if (!data.response) {
      return null;
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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>మెనూ</Text>
      </View>
      <FlatList
        data={[data]} // Wrap data in an array
        renderItem={() => (
          <ScrollView>
            <View style={styles.container}>
              {renderFlatList()}
            </View>
          </ScrollView>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 200,
  },
  image: {
    width: 30,
    height: 30,
    margin: 15
  },
  dropdownSubItem: {
    flexDirection: 'row',
    borderRadius: 10
  },
  textItem: {
    fontSize: 15,
    fontWeight: '800',
    margin: 15,
    color: 'black'
  },
  headerContainer : {
    borderWidth:1,
    width:190,
    height:30,
    borderRadius:10,
    borderTopColor:'white',
    borderLeftColor:"white",
    borderRightColor:'white',
    borderBottomColor:'gray',

  },
  headerText : {
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'blue'
  },
  

});
