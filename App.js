/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Bottom tab Screens
import BottomTabComponent from './src/bottomtab-screens/bottom-tab';
import HomeScreen from './src/bottomtab-screens/home';
import SimpleCounterScreen from './src/bottomtab-screens/simpleCounter';
import RenderDataScreen from './src/bottomtab-screens/renderData';
import DetailScreen from './src/bottomtab-screens/detail';

// Drawer screens
import CustomDrawer from './src/drawer-screens/custom-drawer';
import ProfileScreen from './src/drawer-screens/Profile';

import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {globalStyling as gs} from './src/styles/global-styling';

const drawer = createDrawerNavigator();
const bottomTab = createBottomTabNavigator();

// Must make the stack for each parent feature
const profileStack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // if needed
      num: 0, 
    }
  }
  render() {
    return (
      <NavigationContainer>
        <CustomDrawer/>
      </NavigationContainer>
    )
  };
};