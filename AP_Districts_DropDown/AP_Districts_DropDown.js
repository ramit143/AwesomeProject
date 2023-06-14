

// import React, { useState, useEffect } from "react";
// import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image,ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';



// export const AP_Districts_dropdown = () => {


//     const [data, setData] = useState([]);
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [showNotifications, setShowNotifications] = useState(false);


//     useEffect(() => {
//         fetch('https://api.eenadu.net/newmobileapis/hometabs.php/?stateid=99')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => {
//                 console.error(error);
//             });
//     }, []);

//     const handleOptionSelect = (option) => {
//         if (selectedOptions.includes(option)) {
//             setSelectedOptions(selectedOptions.filter(item => item !== option));
//         } else {
//             setSelectedOptions([...selectedOptions, option]);
//         }
//     };


//     const handleNotificationsToggle = () => {
//         setShowNotifications(!showNotifications);
//     };


   

//     return (
//         <ScrollView>

//             {/* Notification Preferences */}
//             <TouchableOpacity style={styles.itemContainer} onPress={handleNotificationsToggle}>
//                 <View style={styles.itemContent}>
//                     <Icon name="newspaper-outline" size={20} color="black" />
//                     <Text style={styles.itemText}>AP జిల్లాలు</Text>
//                 </View>
//                 <View>
//                     <Icon name={showNotifications ? "chevron-up" : "chevron-down"} size={20} color="black" />
//                 </View>
//             </TouchableOpacity>

//             {/* Dropdown for Notification Preferences */}
//             {showNotifications && (
//                 <View style={styles.dropdownContainer}>
//                     {/* Option 1: Andhra Pradesh */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("అనౌత్పురం")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("అనౌత్పురం") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>అనౌత్పురం</Text>
//                     </TouchableOpacity>

//                     {/* Option 2: Telangana */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("చిత్తురు")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("చిత్తురు") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>చిత్తురు</Text>
//                     </TouchableOpacity>

//                      {/* Option 3: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("తూర్పు గోదావరి")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("తూర్పు గోదావరి") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>తూర్పు గోదావరి</Text>
//                     </TouchableOpacity>
//                     {/* Option 4: Telangana */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("గుంటూరు")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("గుంటూరు") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>గుంటూరు</Text>
//                     </TouchableOpacity>
//                      {/* Option 5: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("వైయస్సార్")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("వైయస్సార్") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>వైయస్సార్</Text>
//                     </TouchableOpacity>
//                      {/* Option 6: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("అమరావతి")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("అమరావతి") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>అమరావతి</Text>
//                     </TouchableOpacity>
//                     {/* Option 7: Andhra Pradesh */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("కర్నూలు")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("కర్నూలు") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>కర్నూలు</Text>
//                     </TouchableOpacity>

//                     {/* Option 8: Telangana */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("ప్రకాశం")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("ప్రకాశం") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>ప్రకాశం</Text>
//                     </TouchableOpacity>

//                      {/* Option 9: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("శ్రీపొట్టి శ్రీరాములు నెల్లూరు")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("శ్రీపొట్టి శ్రీరాములు నెల్లూరు") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>శ్రీపొట్టి శ్రీరాములు నెల్లూరు</Text>
//                     </TouchableOpacity>
//                     {/* Option 10: Telangana */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("గుంశ్రీకాకుళం")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("శ్రీకాకుళం") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>శ్రీకాకుళం</Text>
//                     </TouchableOpacity>
//                      {/* Option 11: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("విశాఖపట్నం")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("వైవిశాఖపట్నం") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>విశాఖపట్నం</Text>
//                     </TouchableOpacity>
//                      {/* Option 12: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("విజయ నగరం")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("విజయ నగరం") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>విజయ నగరం</Text>
//                     </TouchableOpacity>
//                     {/* Option 13: Andhra Pradesh */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("పశ్చిమ గోదావరి")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("పశ్చిమ గోదావరి") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>పశ్చిమ గోదావరి</Text>
//                     </TouchableOpacity>

//                     {/* Option 14: Telangana */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("పార్వీతిపురం మన్యం")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("పార్వీతిపురం మన్యం") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>పార్వీతిపురం మన్యం</Text>
//                     </TouchableOpacity>

//                      {/* Option 15: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("అల్లూరిసీతారామరాజు")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("అల్లూరిసీతారామరాజు") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>అల్లూరిసీతారామరాజు</Text>
//                     </TouchableOpacity>
//                     {/* Option 16: Telangana */}
//                     <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("కర్నాటక")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("కర్నాటక") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>కర్నాటక</Text>
//                     </TouchableOpacity>
//                      {/* Option 17: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("ఒడిశా")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("ఒడిశా") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>ఒడిశా</Text>
//                     </TouchableOpacity>
//                      {/* Option 18: Telangana */}
//                      <TouchableOpacity
//                         style={styles.dropdownItem}
//                         onPress={() => handleOptionSelect("తమిళనాడు")}
//                     >
//                         <Icon
//                             name={selectedOptions.includes("తమిళనాడు") ? "checkbox-outline" : "square-outline"}
//                             size={20}
//                             color="black"
//                         />
//                         <Text style={styles.dropdownItemText}>తమిళనాడు</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//         </ScrollView>
//     )
// }




// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     dropdownItemText: {
//         marginLeft: 10,
//         color: 'black',
//     },
//     dropdownSubItem: {
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     dropdownItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         borderRadius: 8,
//         margin: 2,
//         width: 110,
      
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//     },
//     image: {
//         width: 25,
//         height: 25,
//     },
//     itemContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//         marginLeft: 10,
//         borderColor: 'black',
//         borderRadius: 5,
//         borderWidth: 1,
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         width: '95%',
//         justifyContent: 'space-around',
//         height: 60,
//     },
//     itemContent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: 10,
//     },
//     itemText: {
//         marginLeft: 20,
//         color: 'black',
//     },
//     dropdownContainer:{
//         width:200,
//         height:100,
       
//         display: "flex",
//   flexWrap: "wrap",
//   justifyContent:"space-between",
//     }
// });






import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export const AP_Districts_dropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://api.eenadu.net/newmobileapis/hometabs.php/?stateid=99')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.error(error);
      });
      console.log(data)
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
      console.log("response data === :", { item })
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
     
      {renderFlatList()}
     
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


