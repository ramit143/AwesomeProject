

// import React from "react";
// import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';

// export const HeaderOfNotification = () => {
//   const navigation = useNavigation();

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   const handleOpenSettings = () => {
//     Linking.openSettings();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleGoBack}>
//         <Icon name="arrow-back-outline" size={24} color="black" />
//       </TouchableOpacity>
//       <View style={styles.titleContainer}>
//         <Text style={styles.title}>నోటిఫికెషన్స్</Text>
//       </View>
//       <TouchableOpacity onPress={handleOpenSettings}>
//         <Icon name="settings-outline" size={24} color="blue" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   titleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'blue',
//   },
// });


import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const HeaderOfNotification = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleOpenSettings = () => {
    Linking.openSettings();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleGoBack}>
        <Icon name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>నోటిఫికెషన్స్</Text>
      </View>
      <TouchableOpacity onPress={handleOpenSettings}>
        <Icon name="settings-outline" size={24} color="blue" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
