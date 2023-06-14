

// import React from "react";
// import { useEffect } from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
// import { ListOfData } from "../ListOfData/ListOfData";
// import { NewsDetailsScreen } from "../NewsDetailScreen/newsDetailsScreen";
// import SplashScreen from 'react-native-splash-screen';
// import { Notifications } from "../Notifications/Notifications";
// import { NewsDetailsOfNotification } from "../NewsDetailsOfNotification/NewsDetailsOfNotification";
// import { Bookmarks } from "../Bookmarks/Bookmarks";


// const Stack = createStackNavigator();
// const MainScreen = () => {

//   useEffect(() => {
//     // Hide the splash screen after a specific duration (e.g., 2000 milliseconds = 2 seconds)
//     setTimeout(() => {
//       SplashScreen.hide();
//     }, 2000);
//   }, []);

//   return (
//     // NavigationContainer wraps the whole navigation stack
//     <NavigationContainer>
//       <Stack.Navigator>
//         {/* Stack.Screen defines each screen in the stack */}
//         <Stack.Screen name="Home" component={ListOfData} options={{ headerShown: false }} />
//         <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Notifications" component={ Notifications} options={{ headerShown: false }}/>
//         <Stack.Screen name="NewsDetailsOfNotification" component={ NewsDetailsOfNotification} options={{ headerShown: false }}/>
//         <Stack.Screen name="Bookmarks" component={ Bookmarks} options={{ headerShown: false }} />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MainScreen;


// <Stack.Screen name="Home" component={ListOfData} options={{ headerShown: false }} />
// <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{ headerShown: false }} />




import React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { ListOfData } from "../ListOfData/ListOfData";
import { NewsDetailsScreen } from "../NewsDetailScreen/newsDetailsScreen";
import SplashScreen from 'react-native-splash-screen';
import { Notifications } from "../Notifications/Notifications";
import { NewsDetailsOfNotification } from "../NewsDetailsOfNotification/NewsDetailsOfNotification";
import { OpenChromePopupButton } from "../OpenBrowserPopUp/OpenBrowserPopUp";
import { PreferencesComponent } from "../Preferences/Preferences";
import { MenuPreferenceComponent } from "../MenuPreferences/MenuPreferences";
import { MenuOfHeader } from "../MenuOfHeader/MenuOfHeader";
// import { Bookmarks } from "../Bookmarks/Bookmarks";


const Stack = createStackNavigator();
const MainScreen = () => {

  useEffect(() => {
    // Hide the splash screen after a specific duration (e.g., 2000 milliseconds = 2 seconds)
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (bookmark) => {
    setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
  };

  return (
    // NavigationContainer wraps the whole navigation stack
    <NavigationContainer>
      <Stack.Navigator>
        {/* Stack.Screen defines each screen in the stack */}
        <Stack.Screen name="Home" component={ListOfData} options={{ headerShown: false }} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
        <Stack.Screen name="NewsDetailsOfNotification" component={NewsDetailsOfNotification} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Bookmarks" component={ Bookmarks} options={{ headerShown: false }}  bookmarks={bookmarks} addBookmark={addBookmark} /> */}
        <Stack.Screen name="OpenWithChrome" component={OpenChromePopupButton} />
        {/* <Stack.Screen name="Preference" component={PreferencesComponent} options={{ headerShown: false }} /> */}
        <Stack.Screen name="MenuPreferenceComponent" component={MenuPreferenceComponent} options={{ headerShown: false }} />
        {/* <Stack.Screen name="MenuOfHeader" component={MenuOfHeader} options={{ headerShown: false }} /> */}



      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainScreen;


// <Stack.Screen name="Home" component={ListOfData} options={{ headerShown: false }} />
// <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} options={{ headerShown: false }} />
