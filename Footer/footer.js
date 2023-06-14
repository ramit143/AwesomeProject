


// import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


//  function Footer() {

// const navigation = useNavigation();

// // const handleBookmarksClick = () => {
// //   navigation.navigate("Bookmarks")
// // }

// const handlePreferenceClick = () => {
//   navigation.navigate("Preference")
// }

//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.item}>
//           <Icon name="globe" size={30} color="skyblue" />
//           <Text style={styles.itemText}>ఈనాడు.నెట్</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.item} onPress={() =>{}}>
//           <Icon name="book" size={30} />
//           <Text style={styles.itemText}>బుక్‌మార్క్స్‌</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.item} onPress={() => handlePreferenceClick()}>
//           <Icon name="list-sharp" size={30} />
//           <Text style={styles.itemText}>ప్రిఫరెన్స్</Text>
//         </TouchableOpacity>


//         <TouchableOpacity style={styles.item}>
//           <Icon name="moon-sharp" size={30} />
//           <Text style={styles.itemText}>మోడ్‌/థీమ్</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.item}>
//           <Icon name="ellipsis-horizontal" size={30} />
//           <Text style={styles.itemText}>మరిన్ని</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
// {/* <ion-icon name="moon-sharp"></ion-icon> */}
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: 'lightgray',
//     borderRadius: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   item: {
//     alignItems: 'center',
//     padding:15
//   },
//   itemText:{
//     fontSize:10
//   }
// });

// export default Footer;





// import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { PreferencesComponent } from '../Preferences/Preferences';
// import MoreComponent from '../MoreComponent/MoreComponent';


// function Footer() {
//   const [showMenu, setShowMenu] = useState(false);

//   const navigation = useNavigation();


//   const handlePreferenceClick = () => {
//     setShowMenu(true);
//   }
//   const handleMoreClick = () => {
//     setShowMenu(true);
//   }

//   const handleCloseMenu = () => {
//     setShowMenu(false);
//   };

//   const handleOutsideClick = () => {
//     handleCloseMenu();
//   };



//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.item}>
//           <Icon name="globe" size={30} color="skyblue" />
//           <Text style={styles.itemText}>ఈనాడు.నెట్</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.item} onPress={() => { }}>
//           <Icon name="book" size={30} />
//           <Text style={styles.itemText}>బుక్‌మార్క్స్‌</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.item} onPress={() => handlePreferenceClick()}>
//           <Icon name="list-sharp" size={30} />
//           <Text style={styles.itemText}>ప్రిఫరెన్స్</Text>
//         </TouchableOpacity>

//         {/* Render MenuOfHeader component */}
//         {showMenu && (
//           <Modal transparent={true} visible={true}>
//             <TouchableWithoutFeedback onPress={handleOutsideClick}>
//               <View style={styles.modalContainer}>
//                 <View style={styles.menuContent}>
//                   {/* Your MenuOfHeader component */}
//                   <View style={styles.menuScrollView}>
//                     <PreferencesComponent />
//                   </View>
//                 </View>
//               </View>
//             </TouchableWithoutFeedback>
//           </Modal>
//         )}
//         <TouchableOpacity style={styles.item}>
//           <Icon name="moon-sharp" size={30} />
//           <Text style={styles.itemText}>మోడ్‌/థీమ్</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.item} >
//           <Icon name="ellipsis-horizontal" size={30} />
//           <Text style={styles.itemText}>మరిన్ని</Text>
//         </TouchableOpacity>

//          {/* Render MenuOfHeader component */}
//          {showMenu && (
//           <Modal transparent={true} visible={true}>
//             <TouchableWithoutFeedback onPress={handleOutsideClick}>
//               <View style={styles.modalContainer}>
//                 <View style={styles.menuContent}>
//                   {/* Your MenuOfHeader component */}
//                   <View style={styles.menuScrollView}>
//                     <MoreComponent />
//                   </View>
//                 </View>
//               </View>
//             </TouchableWithoutFeedback>
//           </Modal>
//         )}
      
//       </View>
//     </View>
//   );
// }
// {/* <ion-icon name="moon-sharp"></ion-icon> */ }
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: 'lightgray',
//     borderRadius: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   item: {
//     alignItems: 'center',
//     padding: 15
//   },
//   itemText: {
//     fontSize: 10
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   menuContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 15,
//     alignItems: 'flex-end', // Align menu content to the right
//     position: 'absolute',
//     bottom: -20,
//     width: 385,
//   },

// });

// export default Footer;


import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PreferencesComponent } from '../Preferences/Preferences';
import MoreComponent from '../MoreComponent/MoreComponent';

function Footer() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMoreComponent, setShowMoreComponent] = useState(false);

  const navigation = useNavigation();

  const handlePreferenceClick = () => {
    setShowMenu(true);
  };

  const handleMoreClick = () => {
    setShowMoreComponent(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
    setShowMoreComponent(false);
  };

  const handleOutsideClick = () => {
    handleCloseMenu();
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.item}>
          <Icon name="globe" size={30} color="skyblue" />
          <Text style={styles.itemText}>ఈనాడు.నెట్</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => { }}>
          <Icon name="book" size={30} />
          <Text style={styles.itemText}>బుక్‌మార్క్స్‌</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handlePreferenceClick}>
          <Icon name="list-sharp" size={30} />
          <Text style={styles.itemText}>ప్రిఫరెన్స్</Text>
        </TouchableOpacity>
        {showMenu && (
          <Modal transparent={true} visible={true}>
            <TouchableWithoutFeedback onPress={handleOutsideClick}>
              <View style={styles.modalContainer}>
                <View style={styles.menuContent}>
                  {/* Your MenuOfHeader component */}
                  <View style={styles.menuScrollView}>
                    <PreferencesComponent />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
        <TouchableOpacity style={styles.item}>
          <Icon name="moon-sharp" size={30} />
          <Text style={styles.itemText}>మోడ్‌/థీమ్</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleMoreClick}>
          <Icon name="ellipsis-horizontal" size={30} />
          <Text style={styles.itemText}>మరిన్ని</Text>
        </TouchableOpacity>
        {showMoreComponent && (
          <Modal transparent={true} visible={true}>
            <TouchableWithoutFeedback onPress={handleOutsideClick}>
              <View style={styles.modalContainer}>
                <View style={styles.menuContent}>
                  {/* Your MoreComponent */}
                  <View style={styles.menuScrollView}>
                    <MoreComponent />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    padding: 15,
  },
  itemText: {
    fontSize: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'flex-end', // Align menu content to the right
    position: 'absolute',
    bottom: -20,
    width: 385,
  },
});

export default Footer;
