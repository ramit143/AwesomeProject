// import React from 'react';
// import { View, Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import Splash from './screens/Splash';
// import MainScreen from './screens/MainScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
//         <Stack.Screen name='MainScreen' component={MainScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;





// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function EmptyScreen() {
//   return <View />;
// }

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
//       <Button
//         title="Go to Root, Profile"
//         onPress={() => navigation.navigate('Root', { screen: 'Profile' })}
//       />
//     </View>
//   );
// }

// function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// function Root() {
//   return (
//     <Drawer.Navigator >
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Profile" component={EmptyScreen} />
//       <Stack.Screen name="Settings" component={EmptyScreen} />
//     </Drawer.Navigator>
//   );
// }

// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Root" component={Root} />
//         <Stack.Screen name="Feed" component={Feed} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigator;





import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

function EmptyScreen() {
  return <View />;
}

function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Root')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
      <Stack.Screen name="Settings" component={EmptyScreen} />
    </Drawer.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
