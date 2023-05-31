// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import { HeaderOfBookmarks } from "../HeaderOfBookmarks/HeaderOfBookmarks";

// export const Bookmarks = (item) => {
//   return (
//     <View style={styles.container}>
//       <HeaderOfBookmarks />
//       <View style={styles.contentContainer}>
//         <TouchableOpacity>
//           <Icon name="md-bookmarks" size={30} color="red" />
//           <Text style={styles.text}>ప్రిఫరెన్స్</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     marginTop: 10,
//   },
// });

// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/Ionicons';
// import { HeaderOfBookmarks } from "../HeaderOfBookmarks/HeaderOfBookmarks";



// export const Bookmarks = ({ bookmarks, addBookmark }) => {
//     // Render bookmarked items in the list
//     const renderBookmarks = () => {
//       return bookmarks.map((item, index) => (
//         <TouchableOpacity key={index}>
//           <Icon name="md-bookmarks" size={30} color="red" />
//           <Text style={styles.text}>{item.title}</Text>
//         </TouchableOpacity>
//       ));
//     };
  
//     return (
//       <View style={styles.container}>
//         <HeaderOfBookmarks />
//         <View style={styles.contentContainer}>
//           {/* Render the list of bookmarked items */}
//           {renderBookmarks()}
//         </View>
//       </View>
//     );
//   };
  

//   const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//       },
//       contentContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       text: {
//         marginTop: 10,
//       },
//     });