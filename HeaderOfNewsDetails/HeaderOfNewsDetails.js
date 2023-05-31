// // import React from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// // import Icon from 'react-native-vector-icons/Ionicons';
// // import { useNavigation } from '@react-navigation/native';



// // export const HeaderOfNewsDetails = ({ name }) => {
// //     const navigation = useNavigation();

// //     const handleGoBack = () => {
// //         navigation.goBack();
// //     };
// //     return (
// //         <View style={styles.header}>
// //             <View style={styles.leftContainer}>
// //                 <TouchableOpacity onPress={handleGoBack}>
// //                     <Icon name="arrow-back-outline" size={24} color="black" />
// //                 </TouchableOpacity>
// //                 <Text style={styles.title}>ఈనాడు</Text>
// //             </View>


// //             <View style={styles.rightContainer}>
// //                 <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
// //                     <Icon name="format-size" size={20} color="blue" />
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
// //                     <Icon name="bookmarks-outline" size={20} color="red" />
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
// //                     <Icon name="share-social-outline" size={20} color="red" />
// //                 </TouchableOpacity>
// //             </View>
// //         </View>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     header: {
// //         flexDirection: 'row',
// //         paddingRight: 5,
// //         paddingStart: 20,
// //         alignItems: 'center',
// //         backgroundColor: 'lightgray',
// //         shadowRadius: 5,
// //         borderRadius: 20, // Add border radius for a rounded container
// //     },
// //     leftContainer: {
// //         flex: 1,
// //     },
// //     rightContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //     },
// //     title: {
// //         color: 'blue',
// //         fontSize: 40,
// //         fontWeight: '900',
// //     },
// //     iconContainer: {
// //         margin: 10,
// //     },
// // });





// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// export const HeaderOfNewsDetails = ({ name }) => {
//     const navigation = useNavigation();

//     const handleGoBack = () => {
//         navigation.goBack();
//     };

//     return (
//         <View style={styles.header}>
//             <View style={styles.leftContainer}>
//                 <TouchableOpacity onPress={handleGoBack}>
//                     <Icon name="arrow-back-outline" size={24} color="black" />
//                 </TouchableOpacity>
//                 <Text style={styles.title}>తాజా</Text>
//             </View>

//             <View style={styles.rightContainer}>
//                 <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
//                     <Icon name="text" size={20} color="red" />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
//                     <Icon name="bookmarks-outline" size={20} color="red" />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.iconContainer} onPress={() => { }}>
//                     <Icon name="share-social-outline" size={20} color="red" />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         flexDirection: 'row',
//         paddingRight: 5,
//         paddingStart: 20,
//         alignItems: 'center',
//         backgroundColor: 'lightgray',
//         shadowRadius: 5,
//         borderRadius: 20,
//     },
//     leftContainer: {
//         flex: 1,
//         flexDirection: 'row', // Added flexDirection to align arrow and title horizontally
//         alignItems: 'center', // Added alignItems to center arrow and title vertically
//     },
//     rightContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     title: {
//         color: 'blue',
//         fontSize: 20,
//         fontWeight: '900',
//         marginLeft: 10, // Added marginLeft to create space between arrow and title
//     },
//     iconContainer: {
//         margin: 10,
//     },
// });



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export const HeaderOfNewsDetails = ({ name, addBookmark }) => {
    const navigation = useNavigation();
  
    const handleGoBack = () => {
      navigation.goBack();
    };
  
    const handleAddBookmark = () => {
      // Create a new bookmarked item and add it to the list
      const newBookmark = {
        title: name, // Pass the name prop as the title of the bookmarked item
      };
      addBookmark(newBookmark);
    };
  
    return (
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>తాజా</Text>
        </View>
  
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconContainer} onPress={handleAddBookmark}>
            <Icon name="bookmarks-outline" size={20} color="red" />
          </TouchableOpacity>
          {/* Rest of the code */}
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
            borderRadius: 20,
        },
        leftContainer: {
            flex: 1,
            flexDirection: 'row', // Added flexDirection to align arrow and title horizontally
            alignItems: 'center', // Added alignItems to center arrow and title vertically
        },
        rightContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        title: {
            color: 'blue',
            fontSize: 20,
            fontWeight: '900',
            marginLeft: 10, // Added marginLeft to create space between arrow and title
        },
        iconContainer: {
            margin: 10,
        },
    });
    