
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { MenuOfHeader } from '../MenuOfHeader/MenuOfHeader';

export const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigation = useNavigation();

  const handleNotificationClick = (item) => {
    console.log("Notification", { item });
    navigation.navigate("Notifications", { item });
  };

  const handleOpenWithChrome = (item) => {
    console.log("OpenWithChrome", { item });
    navigation.navigate("OpenWithChrome", { item });
  };

  const handleMenuOfHeader = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleOutsideClick = () => {
    handleCloseMenu();
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>ఈనాడు</Text>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleOpenWithChrome(props.item)}>
          <Icon name="newspaper-outline" size={20} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handleNotificationClick(props.item)}>
          <Icon name="notifications" size={20} color="red" />
        </TouchableOpacity>
      </View>

      {/* Render MenuOfHeader component conditionally */}
      <TouchableOpacity style={styles.menuContainer} onPress={handleMenuOfHeader}>
        <Icon name="menu" size={20} color="blue" />
      </TouchableOpacity>

      {/* Render MenuOfHeader component */}
      {showMenu && (
        <Modal transparent={true} visible={true}>
          <TouchableWithoutFeedback onPress={handleOutsideClick}>
            <View style={styles.modalContainer}>
              <View style={styles.menuContent}>
                {/* Your MenuOfHeader component */}
                <View style={styles.menuScrollView}>
                  <MenuOfHeader />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
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
  menuContainer: {
    marginLeft: 'auto', // Push the menu to the right side
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  menuContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'flex-end', // Align menu content to the right
    position: 'absolute',
    right: -20,
    width: 240,
  },
  menuScrollView: {
    height: 680 // Set the desired height for scrolling
  },
});

