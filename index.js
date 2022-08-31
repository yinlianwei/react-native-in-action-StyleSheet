/**
 * @format
 */

import {AppRegistry} from 'react-native';
//默认应用
// import App from './App';
//主题切换
// import App from "./app/App";
//d胸卡
import {AppProfileCard as App} from "./app/AppProfileCard";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
