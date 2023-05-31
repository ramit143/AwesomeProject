// import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// function Footer() {
//   return (
//     <View>
//       <View>
//         <TouchableOpacity>
//           <Icon name="globe" size={30} color="skyblue" />
//           <Text>ఈనాడు.నెట్</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="book" size={30}  />
//           <Text>బుక్‌మార్క్స్‌</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="list-sharp" size={30}  />
//           <Text>ప్రిఫరెన్స్ </Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Icon name="affiliatetheme" size={30}  />
//           <Text>మోడ్‌/థీమ్</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//         <Icon name="ellipsis-horizontal" size={30}></Icon>
//           <Text>మరిన్ని </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default Footer;


import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


 function Footer() {

const navigation = useNavigation();

// const handleBookmarksClick = () => {
//   navigation.navigate("Bookmarks")
// }

const handlePreferenceClick = () => {
  navigation.navigate("Preference")
}

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item}>
          <Icon name="globe" size={30} color="skyblue" />
          <Text style={styles.itemText}>ఈనాడు.నెట్</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() =>{}}>
          <Icon name="book" size={30} />
          <Text style={styles.itemText}>బుక్‌మార్క్స్‌</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => handlePreferenceClick()}>
          <Icon name="list-sharp" size={30} />
          <Text style={styles.itemText}>ప్రిఫరెన్స్</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon name="moon-sharp" size={30} />
          <Text style={styles.itemText}>మోడ్‌/థీమ్</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Icon name="ellipsis-horizontal" size={30} />
          <Text style={styles.itemText}>మరిన్ని</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
{/* <ion-icon name="moon-sharp"></ion-icon> */}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  item: {
    alignItems: 'center',
    padding:15
  },
  itemText:{
    fontSize:10
  }
});

export default Footer;

