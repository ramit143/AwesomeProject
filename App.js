import { View, Text } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen';
import AppNavigator from './ComponentForPractice/Src/AppNavigator';
import MainScreen from './ComponentForPractice/Src/screens/MainScreen';

const App = ({ }) => {

  useEffect(() => {
    // Hide the splash screen after a specific duration (e.g., 2000 milliseconds = 2 seconds)
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <AppNavigator />
  )
}

export default App;