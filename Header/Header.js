// // // import React from 'react';
// // // import { View, Text, StyleSheet } from 'react-native';
// // // import { PropsWithChildren } from 'react';


// // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import { TouchableOpacity } from 'react-native-gesture-handler';

// // // // const IconsProps = PropsWithChildren({
// // // //     name : '',
// // // // })


// // // export const Header = ({ name }) => {
// // //     return (
// // //         <View style={{flexDirection:'row',padding:0,margin:0}}>
// // //             <View>
// // //                 <Text style={{ color: "blue", fontSize: 40 ,fontWeight:'900'}}>ఈనాడు</Text>
// // //             </View>

// // //             <View style={{flexDirection:'row',justifyContent:"space-between",alignContent:'center',alignItems:'center'}}>
// // //                 <TouchableOpacity style={{margin:10}} onPress={() => { }}>
// // //                     <Icon name="newspaper-outline" size={20} color="blue" />
// // //                 </TouchableOpacity>
// // //                 <TouchableOpacity style={{margin:10}} onPress={() => { }}>
// // //                     <Icon name="notifications" size={20} color="red" />
// // //                 </TouchableOpacity>
// // //                 <TouchableOpacity style={{margin:10}} onPress={() => { }}>
// // //                     <Icon name="menu" size={20} color="blue" />
// // //                 </TouchableOpacity>

// // //             </View>
// // //         </View>
// // //     )
// // // };

// // // const styles = StyleSheet.create({
// // //     header: {
// // //         backgroundColor: 'lightblue',
// // //         padding: 10,
// // //         width: '100%',
// // //         alignItems: 'center',
// // //     },
// // //     title: {
// // //         fontSize: 20,
// // //         fontWeight: 'bold',
// // //     },
// // // });




// // // import React from 'react';
// // // import { View, Text, StyleSheet } from 'react-native';
// // // import Icon from 'react-native-vector-icons/Ionicons';
// // // import { TouchableOpacity } from 'react-native-gesture-handler';

// // // export const Header = ({ name }) => {
// // //   return (
// // //     <View style={styles.header}>
// // //       <View style={styles.leftContainer}>
// // //         <Text style={styles.title}>ఈనాడు</Text>
// // //       </View>

// // //       <View style={styles.rightContainer}>
// // //         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
// // //           <Icon name="newspaper-outline" size={20} color="blue" />
// // //         </TouchableOpacity>
// // //         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
// // //           <Icon name="notifications" size={20} color="red" />
// // //         </TouchableOpacity>
// // //         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
// // //           <Icon name="menu" size={20} color="blue" />
// // //         </TouchableOpacity>
// // //       </View>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   header: {
// // //     flexDirection: 'row',
// // //     padding: 10,
// // //     alignItems: 'center',
// // //     backgroundColor: 'lightblue',
// // //   },
// // //   leftContainer: {
// // //     flex: 1,
// // //   },
// // //   rightContainer: {
// // //     flexDirection: 'row',
// // //     alignItems: 'center',
// // //   },
// // //   title: {
// // //     color: 'blue',
// // //     fontSize: 40,
// // //     fontWeight: '900',
// // //   },
// // //   iconContainer: {
// // //     margin: 10,
// // //   },
// // // });



// // import React from 'react';
// // import { View, Text, StyleSheet,TouchableOpacity  } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import { OpenBrowserPopUp } from '../OpenBrowserPopUp/OpenBrowserPopUp';


// // export const Header = ({ name }) => {
// //   return (
// //     <View style={styles.header}>
// //       <View style={styles.leftContainer}>
// //         <Text style={styles.title}>ఈనాడు</Text>
// //       </View>

// //       <View style={styles.rightContainer}>
// //         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
// //           <Icon name="newspaper-outline" size={20} color="blue" />
// //           <OpenBrowserPopUp />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
// //           <Icon name="notifications" size={20} color="red" />
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
// //           <Icon name="menu" size={20} color="blue" />
// //         </TouchableOpacity>
// //       </View>
      
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   header: {
// //     flexDirection: 'row',
// //     paddingRight:5,
// //     paddingStart:20,
// //     alignItems: 'center',
// //     backgroundColor: 'lightgray',
// //     shadowRadius:5,
// //     borderRadius: 20, // Add border radius for a rounded container
// //   },
// //   leftContainer: {
// //     flex: 1,
// //   },
// //   rightContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   title: {
// //     color: 'blue',
// //     fontSize: 40,
// //     fontWeight: '900',
// //   },
// //   iconContainer: {
// //     margin: 10,
// //   },
// // });



// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// export const Header = ({ name }) => {
  
// const handleNotificationClick = (item) => {
//   console.log("Notification", {item});
//   navigation.navigate("Notifications", {item})
// }
//   return (
//     <View style={styles.header}>
//       <View style={styles.leftContainer}>
//         <Text style={styles.title}>ఈనాడు</Text>
//       </View>

//       <View style={styles.rightContainer}>
//         <TouchableOpacity style={styles.iconContainer} onPress={() =>{handleNotificationClick(item)}}>
//           <Icon name="newspaper-outline" size={20} color="blue" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
//           <Icon name="notifications" size={20} color="red" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
//           <Icon name="menu" size={20} color="blue" />
//         </TouchableOpacity>
//       </View>
     
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     paddingRight: 5,
//     paddingStart: 20,
//     alignItems: 'center',
//     backgroundColor: 'lightgray',
//     shadowRadius: 5,
//     borderRadius: 20, // Add border radius for a rounded container
//   },
//   leftContainer: {
//     flex: 1,
//   },
//   rightContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   title: {
//     color: 'blue',
//     fontSize: 40,
//     fontWeight: '900',
//   },
//   iconContainer: {
//     margin: 10,
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// export const Header = ({ name, item }) => {
//   const navigation = useNavigation();

//   const handleNotificationClick = (item) => {
//     console.log("Notification", { item });
//     navigation.navigate("Notifications", { item});

//   }
//   const handleOpenWithChrome = (item) => {
//     console.log("OpenWithChrome", { item });
//     navigation.navigate("OpenWithChrome", { item});

//   }
  

//   return (
//     <View style={styles.header}>
//       <View style={styles.leftContainer}>
//         <Text style={styles.title}>ఈనాడు</Text>
//       </View>

//       <View style={styles.rightContainer}>
//         <TouchableOpacity style={styles.iconContainer} onPress={() => {handleOpenWithChrome(item)}}>
//           <Icon name="newspaper-outline" size={20} color="blue" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconContainer} onPress={() => { handleNotificationClick(item)}}>
//           <Icon name="notifications" size={20} color="red" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
//           <Icon name="menu" size={20} color="blue" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     header: {
//       flexDirection: 'row',
//       paddingRight: 5,
//       paddingStart: 20,
//       alignItems: 'center',
//       backgroundColor: 'lightgray',
//       shadowRadius: 5,
//       borderRadius: 20, // Add border radius for a rounded container
//     },
//     leftContainer: {
//       flex: 1,
//     },
//     rightContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     title: {
//       color: 'blue',
//       fontSize: 40,
//       fontWeight: '900',
//     },
//     iconContainer: {
//       margin: 10,
//     },
//   });



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const Header = ({ name, item }) => {
  const navigation = useNavigation();

  const handleNotificationClick = (item) => {
    console.log("Notification", { item });
    navigation.navigate("Notifications", { item });
  };

  const handleOpenWithChrome = (item) => {
    console.log("OpenWithChrome", { item });
    navigation.navigate("OpenWithChrome", { item });
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>ఈనాడు</Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleOpenWithChrome(item)}>
          <Icon name="newspaper-outline" size={20} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleNotificationClick(item)}>
          <Icon name="notifications" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
          <Icon name="menu" size={20} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingRight: 5,
    paddingStart: 20,
    alignItems: 'center',
    backgroundColor: 'lightgray',
    shadowRadius: 5,
    borderRadius: 20, // Add border radius for a rounded container
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 40,
    fontWeight: '900',
  },
  iconContainer: {
    margin: 10,
  },
});
