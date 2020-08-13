/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Drawer screens
import CustomDrawer from './src/drawer-screens/custom-drawer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <CustomDrawer/>
      </NavigationContainer>
    )
  };
};