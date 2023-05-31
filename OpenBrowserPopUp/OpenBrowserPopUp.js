import React from 'react';
import { TouchableOpacity, Linking,Text } from 'react-native';

export  const OpenChromePopupButton = () => {
  const handlePress = async () => {
    const url = 'https://google.com'; // Replace 'example.com' with your desired URL
    const isSupported = await Linking.canOpenURL(url);

    if (isSupported) {
      await Linking.openURL(url);
    } else {
      console.log("Chrome is not installed on this device.");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {/* Your TouchableOpacity content */}
     
    </TouchableOpacity>
  );
};


