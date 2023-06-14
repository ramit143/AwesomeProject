/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import MainScreen from './MainScreen/MainScreen';
import App from './App'
import MainScreen from './MainScreen/MainScreen';




AppRegistry.registerComponent(appName, () =>  MainScreen);
