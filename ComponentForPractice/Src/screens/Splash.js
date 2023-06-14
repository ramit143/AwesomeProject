import React, { useEffect } from 'react';
import { View, Text } from 'react-native';


const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 3000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, fontWeight: '700' }}>Splash</Text>
    </View>
  );
};

export default Splash;
