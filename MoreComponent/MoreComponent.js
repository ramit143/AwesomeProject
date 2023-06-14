// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
// import NotificationsPreference from '../NotificationsPreference/NotificationsPreference';
// import NewsArticlePreference from '../NewsArticlePreference/NewsArticlePreference';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icons from 'react-native-vector-icons/Ionicons';
// import Iconic from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import HeaderOfMoreComponent from './HeaderOfMoreComponent/HeaderOfMoreComponent';
// import ContactUs from './ContactUs/ContactUs';



// function MoreComponent() {
//   const [showContactUsComponent, setContactUsComponent] = useState(false)
//   const navigation = useNavigation();
//   const handleContactUsClick = () => {
//     setContactUsComponent(true)
//   }

//   const handleCloseMenu = () => {
//     setContactUsComponent(false);
//   }


//   const handleOutsideClick = () => {
//     handleCloseMenu();
//   }

//   const handleMenuPreferenceToggle = () => {
//     navigation.navigate("MenuPreferenceComponent")
//   }
//   return (
//     <View>
//       <View style={styles.headerContainer}>
//         <HeaderOfMoreComponent />
//       </View>
//       <View style={styles.iconContainer}>
//         <View style={styles.contentContainer}>
//           {/* Menu Preferences */}
//           <TouchableOpacity style={styles.itemContainer} onPress={() => handleMenuPreferenceToggle()}>
//             <View style={styles.itemSubContainer}>
//               <Icon name="grid-outline" size={20} color="blue" />
//               <Text style={styles.itemTextMenuPreference}>మెనూ ప్రిఫరెన్స్</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.contentContainer}>
//           {/* Menu Preferences */}
//           <TouchableOpacity style={styles.itemContainer} onPress={() => handleContactUsClick()}>
//             <View style={styles.itemSubContainer}>
//               <Icon name="contact-mail" size={30} color="blue" />
//               <Text style={styles.itemTextContactUs}>కాంటాక్ట్ అస్ </Text>
//             </View>
//           </TouchableOpacity>
//           {
//             showContactUsComponent && (
//               <Modal transparent={true} visible={true}>
//                 <TouchableWithoutFeedback onPress={handleOutsideClick}>
//                   <View style={styles.modalContainer}>
//                     <View style={styles.menuContent}>
//                       <View style={styles.menuScrollView}>
//                         <ContactUs />
//                       </View>
//                     </View>
//                   </View>
//                 </TouchableWithoutFeedback>
//               </Modal>
//             )
//           }

//           <TouchableOpacity style={styles.itemContainer} onPress={() => handleContactUsClick()}>
//             <View style={styles.itemSubContainer}>
//               <Icon name="balance-scale" size={30} color="blue" />
//               <Text style={styles.itemTextContactUs}> లీగల్ </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.itemContainer} onPress={() => handleContactUsClick()}>
//             <View style={styles.itemSubContainer}>
//               <Icon name="info-circle" size={30} color="blue" />
//               <Text style={styles.itemTextContactUs}>యాప్ ఇన్ఫో </Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.itemContainer} onPress={() => handleContactUsClick()}>
//             <View style={styles.itemSubContainer}>
//               <Icons name="share" size={30} color="blue" />
//               <Text style={styles.itemTextContactUs}>షేర్  యాప్</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.itemContainer} onPress={() => handleContactUsClick()}>
//             <View style={styles.itemSubContainer}>
//               <Icon name="star" size={30} color="red" />
//               <Text style={styles.itemTextContactUs}>యాప్ రేటింగ్ </Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//       </View>
//       <View style={styles.notification}>
//         <NotificationsPreference />
//       </View>
//       <View style={styles.newsArticle}>
//         <NewsArticlePreference />
//       </View>
//     </View>
//   )
// }

// export default MoreComponent



// const styles = StyleSheet.create({
//   headerContainer: {
//     marginLeft: 10
//   },
//   contentContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 3,
//   },
//   itemContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderColor: 'black',
//     borderRadius: 5,
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     width: '95%',
//     justifyContent: 'space-around',
//     // height: 60,
//     textAlign: 'center'
//   },
//   itemSubContainer: {
//     flexDirection: 'column',
//     paddingRight: 140,
//     height: 100,
//     width: 250
//   },
//   itemTextMenuPreference: {
//     color: 'black',
//     marginLeft: -20,
//     marginTop: 10
//   },
//   itemTextContactUs: {
//     color: 'black',
//     marginLeft: -20,
//     marginTop: 10
//   },
//   notification: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//     marginLeft: 20,
//   },
//   newsArticle: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//     marginLeft: 20
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





import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Modal } from 'react-native';
import NotificationsPreference from '../NotificationsPreference/NotificationsPreference';
import NewsArticlePreference from '../NewsArticlePreference/NewsArticlePreference';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import HeaderOfMoreComponent from './HeaderOfMoreComponent/HeaderOfMoreComponent';
import ContactUs from './ContactUs/ContactUs';
import { ScrollView } from 'react-native-gesture-handler';

function MoreComponent() {
  const [showContactUsComponent, setContactUsComponent] = useState(false);
  
  const navigation = useNavigation();

  const handleContactUsClick = () => {
    setContactUsComponent(true);
  };

  const handleCloseMenu = () => {
    setContactUsComponent(false);
  };

  const handleOutsideClick = () => {
    handleCloseMenu();
  };

  const handleMenuPreferenceToggle = () => {
    navigation.navigate("MenuPreferenceComponent");
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.headerContainer}>
          <HeaderOfMoreComponent />
        </View>
        <View style={styles.rowContainer} >

          <View style={styles.firstRow} >
            <View>
              <TouchableOpacity style={styles.itemContainer} onPress={handleMenuPreferenceToggle}>
                <View style={styles.itemSubContainer}>
                  <Icon name="th-list" size={20} color="teal" />
                  <Text style={styles.itemTextContactUs}>మెనూ ప్రిఫరెన్స్</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.itemContainer} onPress={handleContactUsClick}>
                <View style={styles.itemSubContainer}>
                  <Icons name="person-circle" size={30} color="teal" />
                  <Text style={styles.itemTextContactUs}>కాంటాక్ట్ అస్</Text>
                </View>
              </TouchableOpacity>
              {
               showContactUsComponent && (
                  <Modal transparent={true} visible={true}>
                      <TouchableWithoutFeedback onPress={ handleOutsideClick }>
                        <View  style={styles.modalContainer}>
                          <View style={styles.menuContent}>
                            <View>
                              <ContactUs />
                            </View>
                          </View>
                        </View>
                      </TouchableWithoutFeedback>
                  </Modal>
                )
              }
            </View>
            <View>
              <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
                <View style={styles.itemSubContainer}>
                  <Icon name="balance-scale" size={30} color="teal" />
                  <Text style={styles.itemTextContactUs}>లీగల్</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.secondRow}>
            <View>
              <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
                <View style={styles.itemSubContainer}>
                  <Icons name="information-circle" size={30} color="teal" />
                  <Text style={styles.itemTextContactUs}>లీగల్</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
                <View style={styles.itemSubContainer}>
                  <Icons name="share" size={30} color="teal" />
                  <Text style={styles.itemTextContactUs}>షేర్ యాప్</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.itemContainer} onPress={() => {}}>
                <View style={styles.itemSubContainer}>
                  <Icon name="star" size={30} color="red" />
                  <Text style={styles.itemTextContactUs}>యాప్ రేటింగ్</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.notification}>
          <NotificationsPreference />
        </View>
        <View style={styles.newsArticle}>
          <NewsArticlePreference />
        </View>
        {/* {showContactUsComponent && (
          <Modal transparent={true} visible={true}>
            <TouchableWithoutFeedback onPress={handleOutsideClick}>
              <View style={styles.modalContainer}>
                <View style={styles.menuContent}>
                  <View style={styles.menuScrollView}>
                    <ContactUs />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )} */}
      </View>
    </ScrollView>
  );
}

export default MoreComponent;


const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
  
  },
  firstRow: {
    flexDirection: 'row',
  },
  iconSize: {
    marginRight: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemSubContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    width: 100,
    height: 80,
    margin:8,
    borderRadius:5
  },
  itemTextMenuPreference: {
    marginLeft: 10,
    fontSize: 16,
    color: 'blue',
  },
  itemTextContactUs: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',         
  },
  secondRow: {
    flexDirection: 'row',
  },
  notification: {
    marginBottom: 20,
  
  },
  newsArticle: {
    marginBottom: 20,
   
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
    alignItems: 'center', // Align menu content to the right
    position: 'absolute',
    bottom: -20,
    width: 385,
  },
  menuScrollView: {
    flex: 1,
  },
});


