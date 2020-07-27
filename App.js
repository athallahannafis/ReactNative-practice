/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
// import 'react-native-gesture-handler';
import React, {Component} from 'react';

// Navigator
import Navigator from './route.js';

export default class App extends Component {
  render() {
    return (
      <Navigator/>
    );
  };
};