
// // // import React from "react";
// // // import WebView from "react-native-webview";
// // // import { useState,useEffect } from "react";


// // // export const Notifications = ({route}) => {

// // //   const [data, setData] = useState([]); // State to store the fetched data

// // //   const image = data.news_midthumb_image.substring(8); // Extract the image path from the data
// // //     const Imageurl = "https://assets.eenadu.net" + image; // Construct the full image URL

// // //   useEffect(() => {
// // //     // Fetch data from the Eenadu API endpoint
// // //     fetch('https://assets.eenadu.net/home_json/mostreadnews.json')
// // //       .then((response) => response.json())
// // //       .then((json) => setData(json)); // Update the data state with the fetched JSON data
// // //   }, []);

// // //     return (
// // //         <>
// // //           <WebView  
// // //           source={{uri:Imageurl}}
// // //           />
// // //         </>
// // //     );
// // // }



// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';






// // export const Notifications  = ( {navigation}) => {
// //   const [data, setData] = useState([]); // State to store the fetched data

// //   useEffect(() => {
// //     // Fetch data from the Eenadu API endpoint
// //     fetch('https://assets.eenadu.net/home_json/mostreadnews.json')
// //       .then((response) => response.json())
// //       .then((json) => setData(json)); // Update the data state with the fetched JSON data
// //   }, []);

  
// //   const handleItemClick = (item) => {
// //     console.log("Item details:", item);
// //     // Perform any desired operations with the item details
// //     navigation.navigate("NewsDetails", { item});
// //   };

// //   const renderItem = ({ item }) => {
// //     const image = item.news_midthumb_image.substring(8); // Extract the image path from the data
// //     const Imageurl = "https://assets.eenadu.net" + image; // Construct the full image URL

// //     return (
// //       <TouchableOpacity key={item.news_id} style={styles.itemContainer} onPress={() => handleItemClick(item)}>
// //         <Image
// //           source={{ uri: Imageurl }}
// //           style={styles.image}
// //         />
// //         <View style={styles.itemContent}>
// //           <Text style={styles.title}>{item.news_title_telugu}</Text>
// //         </View>
// //       </TouchableOpacity>
// //     );
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <FlatList
// //         data={data}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.news_id}
// //       />

// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: 'center',
// //   },
// //   itemContainer: {
// //     flex: 1,
// //     borderWidth: 1,
// //     marginTop: 15,
// //     marginLeft: 5,
// //     marginRight: 5,
// //     borderRadius: 10,
// //     width: 350,
// //     height:220,
// //     flexDirection:'column',
// //   },
// //   image: {
// //     width: 335,
// //     height: 140,
// //     borderRadius: 10,
// //     margin: 5,
// //   },
// //   itemContent: {
// //     borderWidth: 0,
// //     justifyContent: 'center',
// //   },
// //   title: {
// //     fontSize: 15,
// //     fontWeight: 'bold',
// //     color: "black",
// //     borderWidth: 0,
// //     textAlign: 'center',
// //     justifyContent:'center',
// //     alignItems:'center',
// //     alignContent:"center",
// //     flexWrap: "wrap",
// //     width: 180,
// //     height: 80,
// //   },
// //   description: {
// //     fontSize: 16,
// //     marginTop: 8,
// //   },
// // });

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

// export const Notifications = ({ navigation }) => {
//   const [data, setData] = useState([]); // State to store the fetched data

//   useEffect(() => {
//     // Fetch data from the Eenadu API endpoint
//     fetch('https://assets.eenadu.net/home_json/mostreadnews.json')
//       .then((response) => response.json())
//       .then((json) => setData(json)); // Update the data state with the fetched JSON data
//   }, []);

//   const handleItemClick = (item) => {
//     console.log("Item details:", item);
//     // Perform any desired operations with the item details
//     navigation.navigate("NewsDetails", { item });
//   };

//   const renderItem = ({ item }) => {
//     const image = item.news_midthumb_image.substring(8); // Extract the image path from the data
//     const Imageurl = "https://assets.eenadu.net" + image; // Construct the full image URL

//     return (
//       <TouchableOpacity key={item.news_id} style={styles.itemContainer} onPress={() => handleItemClick(item)}>
//         <Image
//           source={{ uri: Imageurl }}
//           style={styles.image}
//         />
//         <View style={styles.itemContent}>
//           <Text style={styles.title}>{item.news_title_telugu}</Text>
//         </View>
//         <View>
//           <Text style={styles.date}>{item.publish_createdon}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.news_id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: 'center',
//   },
//   itemContainer: {
//     flex: 1,
//     borderWidth: 1,
//     marginTop: 15,
//     marginLeft: 5,
//     marginRight: 5,
//     borderRadius: 10,
//     width: 350,
//     height: 220,
//     flexDirection: 'column',
//   },
//   image: {
//     width: 335,
//     height: 140,
//     borderRadius: 10,
//     margin: 5,
//   },
//   itemContent: {
//     borderWidth: 0,
//     justifyContent: 'center',
//     alignItems: 'center', // Align content horizontally
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color: "black",
//     borderWidth: 0,
//     textAlign: 'center',
//     width: 350,
//     height: 80,
//   },
//   description: {
//     fontSize: 16,
//     marginTop: 8,
//   },
//   date: {

//   }
// });


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { HeaderOfNotification } from '../HeaderOfNotification/HeaderOfNotification';

export const Notifications = ({ navigation }) => {
  const [data, setData] = useState([]); // State to store the fetched data

  useEffect(() => {
    // Fetch data from the Eenadu API endpoint
    fetch('https://assets.eenadu.net/home_json/mostreadnews.json')
      .then((response) => response.json())
      .then((json) => setData(json)); // Update the data state with the fetched JSON data
  }, []);

  const handleItemClick = (item) => {
    console.log("Item details:", item);
    // Perform any desired operations with the item details
    navigation.navigate("NewsDetails", { item });
  };

  const renderItem = ({ item }) => {
    const image = item.news_midthumb_image.substring(8); // Extract the image path from the data
    const Imageurl = "https://assets.eenadu.net" + image; // Construct the full image URL

    return (
      <TouchableOpacity key={item.news_id} style={styles.itemContainer} onPress={() => handleItemClick(item)}>
        <Image
          source={{ uri: Imageurl }}
          style={styles.image}
        />
        <View style={styles.itemContent}>
          <Text style={styles.title}>{item.news_title_telugu}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{item.publish_createdon}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderOfNotification />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.news_id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    width: 350,
    height: 220,
    flexDirection: 'column',
  },
  image: {
    width: 335,
    height: 140,
    borderRadius: 10,
    margin: 5,
  },
  itemContent: {
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center', // Align content horizontally
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "black",
    borderWidth: 0,
    textAlign: 'center',
    width: 350,
    height: 80,
    margin:5
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  dateContainer: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  date: {
    fontSize: 14,
    color: 'black',
  }
});
