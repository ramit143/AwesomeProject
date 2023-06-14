





// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { HeaderOfPreferenceComponent } from "../HeaderOfPreferenceComponent/HeaderOfPreferenceComponent";
// import { useNavigation } from '@react-navigation/native';

// export const PreferencesComponent = () => {
//     const [showNotifications, setShowNotifications] = useState(false);
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [selectedDropdown, setSelectedDropdown] = useState(null);

//     const navigation = useNavigation();


//     const handleMenuPreferenceToggle = () => {
//         navigation.navigate("MenuPreferenceComponent")
//     }

//     const handleNotificationsToggle = () => {
//         setShowNotifications(!showNotifications);
//     };

//     const handleOptionSelect = (option) => {
//         if (selectedOptions.includes(option)) {
//             setSelectedOptions(selectedOptions.filter(item => item !== option));
//         } else {
//             setSelectedOptions([...selectedOptions, option]);
//         }
//     };


//     // const handleDropdownToggle = () => {
//     //     setShowDropdown(!showDropdown);
//     // };


//     const handleDropdownToggle = (dropdown) => {
//         if (selectedDropdown === dropdown) {
//             setSelectedDropdown(null); // Deselect the current dropdown if clicked again
//         } else {
//             setSelectedDropdown(dropdown);
//         }
//         setShowDropdown(!showDropdown);
//     };



//     return (
//         <View style={styles.container}>

//                 <HeaderOfPreferenceComponent />


//             <View style={styles.contentContainer}>
//                 {/* Menu Preferences */}
//                 <TouchableOpacity style={styles.itemContainer} onPress={() => handleMenuPreferenceToggle()}>
//                     <View style={styles.itemSubContainer}>
//                         <Icon name="grid-outline" size={20} color="blue" />
//                         <Text style={styles.itemText}>మెనూ ప్రిఫరెన్స్</Text>
//                     </View>
//                 </TouchableOpacity>

//                 {/* Notification Preferences */}
//                 <TouchableOpacity style={styles.itemContainer} onPress={handleNotificationsToggle}>
//                     <View style={styles.itemContent}>
//                         <Icon name="notifications-off-outline" size={20} color="red" />
//                         <Text style={styles.itemText}>నోటిఫికేషన్ ప్రిఫరెన్స్</Text>
//                     </View>
//                     <View>
//                         <Icon name={showNotifications ? "chevron-up" : "chevron-down"} size={20} color="black" />
//                     </View>
//                 </TouchableOpacity>

//                 {/* Dropdown for Notification Preferences */}
//                 {showNotifications && (
//                     <View style={styles.dropdownContainer}>
//                         {/* Option 1: Andhra Pradesh */}
//                         <TouchableOpacity
//                             style={styles.dropdownItem}
//                             onPress={() => handleOptionSelect("ఆంధ్రప్రదేశ్")}
//                         >
//                             <Icon
//                                 name={selectedOptions.includes("ఆంధ్రప్రదేశ్") ? "checkbox-outline" : "square-outline"}
//                                 size={20}
//                                 color="black"
//                             />
//                             <Text style={styles.dropdownItemText}>ఆంధ్రప్రదేశ్</Text>
//                         </TouchableOpacity>

//                         {/* Option 2: Telangana */}
//                         <TouchableOpacity
//                             style={styles.dropdownItem}
//                             onPress={() => handleOptionSelect("తెలంగాణ")}
//                         >
//                             <Icon
//                                 name={selectedOptions.includes("తెలంగాణ") ? "checkbox-outline" : "square-outline"}
//                                 size={20}
//                                 color="black"
//                             />
//                             <Text style={styles.dropdownItemText}>తెలంగాణ</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )}

//                 {/* NEWS Article Preferences */}
//                 <TouchableOpacity style={styles.itemContainer} onPress={() => handleDropdownToggle("news")}>
//                     <View style={styles.itemContent}>
//                         <Icon name="hand-right" size={20} color="black" />
//                         <Text style={styles.itemText}>NEWS Article ప్రిఫరెన్స్</Text>
//                     </View>
//                     <View>
//                         <Icon name={showDropdown ? "chevron-up" : "chevron-down"} size={20} color="black" />
//                     </View>
//                 </TouchableOpacity>

//                 {showDropdown && selectedDropdown === "news" && (
//                     <View style={styles.dropdownContainer}>
//                         {/* Add your dropdown items here */}
//                         {/* Example dropdown item */}
//                         <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Option 1")}>
//                             <Icon
//                                 name={selectedOptions.includes("Option 1") ? "checkbox-outline" : "square-outline"}
//                                 size={20}
//                                 color="black"
//                             />
//                             <Text style={styles.dropdownItemText}>MIDDLE STRIPE</Text>
//                         </TouchableOpacity>

//                         {/* Example dropdown item */}
//                         <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Option 2")}>
//                             <Icon
//                                 name={selectedOptions.includes("Option 2") ? "checkbox-outline" : "square-outline"}
//                                 size={20}
//                                 color="black"
//                             />
//                             <Text style={styles.dropdownItemText}>BOTTOM STRIPE</Text>
//                         </TouchableOpacity>

//                         {/* Example dropdown item */}
//                         <TouchableOpacity style={styles.dropdownItem2} onPress={() => handleOptionSelect("Option 3")}>
//                             <Icon
//                                 name={selectedOptions.includes("Option 3") ? "checkbox-outline" : "square-outline"}
//                                 size={20}
//                                 color="black"
//                             />
//                             <Text style={styles.dropdownItemText}>SWIPE</Text>
//                         </TouchableOpacity>
//                     </View>

//                 )}
//             </View>
//         </View >
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//     },
//     contentContainer: {
//         flex: 1,
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     itemContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//         borderColor: 'black',
//         borderRadius: 5,
//         borderWidth: 1,
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         width: '95%',
//         justifyContent: "space-around",
//         height: 60,
//         // marginTop:15,
//         // marginLeft:5,
//         // marginRight:0
//     },
//     itemContent: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: 10,
//     },
//     itemSubContainer: {
//         flexDirection: 'row',
//         paddingRight: 140,
//     },
//     itemText: {
//         marginLeft: 20,
//         color: 'black',
//     },
//     dropdownContainer: {
//         width: '95%',
//         borderColor: 'black',
//         marginTop: 5,
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//         flexDirection: 'row',
//         justifyContent: "space-between"
//     },
//     dropdownItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 5,
//         borderWidth: 1,
//         padding: 20,
//         borderRadius: 8,
//         marginBottom: 15
//     },
//     dropdownItemText: {
//         marginLeft: 10,
//         color: 'black',
//     },
//     dropdownContainer: {
//         width: '95%',
//         borderColor: 'black',
//         marginTop: 5,
//         paddingHorizontal: 15,
//         paddingVertical: 5,
//         flexDirection: 'row', // Changed from 'row' to 'column'
//     },
//     dropdownItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 5,
//         borderWidth: 1,
//         paddingVertical: 20, // Changed from 20 to 10 for smaller padding
//         paddingHorizontal: 20, // Changed from 20 to 15 for smaller padding
//         borderRadius: 8,
//         marginBottom: 20,
//         // width:100,
//         margin: 20

//     },
//     dropdownItemText: {
//         marginLeft: 10,
//         color: 'black',
//     },
//     dropdownItem2: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//         borderWidth: 1,
//         paddingVertical: 25, // Changed from 20 to 10 for smaller padding
//         paddingHorizontal: 10, // Changed from 20 to 15 for smaller padding
//         borderRadius: 8,
//         marginBottom: 15,
//         width: 110,
//     },

// });











import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { HeaderOfPreferenceComponent } from "../HeaderOfPreferenceComponent/HeaderOfPreferenceComponent";
import { useNavigation } from '@react-navigation/native';
import NewsArticlePreference from "../NewsArticlePreference/NewsArticlePreference";
import NotificationsPreference from "../NotificationsPreference/NotificationsPreference";

export const PreferencesComponent = () => {

    const navigation = useNavigation();


    const handleMenuPreferenceToggle = () => {
        navigation.navigate("MenuPreferenceComponent")
    }





    return (
        <View style={styles.container}>

            <HeaderOfPreferenceComponent />


            <View style={styles.subContainer}>
                <View>
                    <View style={styles.contentContainer}>
                        {/* Menu Preferences */}
                        <TouchableOpacity style={styles.itemContainer} onPress={() => handleMenuPreferenceToggle()}>
                            <View style={styles.itemSubContainer}>
                                <Icon name="th-list" size={20} color="blue" />
                                <Text style={styles.itemText}>మెనూ ప్రిఫరెన్స్</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <NotificationsPreference />
                    </View>


                    <View>
                        <NewsArticlePreference />
                    </View>
                </View>
            </View>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    subContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      marginLeft:20
    },
    contentContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      borderColor: 'black',
      borderRadius: 5,
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      width: '95%',
      justifyContent: 'space-around',
      height: 60,
    },
    itemSubContainer: {
      flexDirection: 'row',
      paddingRight: 140,
    },
    itemText: {
      marginLeft: 20,
      color: 'black',
    },
  });
  

