/**
 * This file contains features which can only be accessed with bottom tab
 * navigator
 */

import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Screens
import HomeScreen from './home';
import DetailScreen from './detail';
import RenderDataScreen from './renderData';
import SimpleCounterScreen from './simpleCounter';

// Extra
import BackButton from '../extra-component/back-button';
import LeftToggle from '../extra-component/left-toggle';

const homeStack = createStackNavigator();
const renderDataStack = createStackNavigator();
const simpleCounterStack = createStackNavigator();

const bottomTab = createBottomTabNavigator();

export default class BottomTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // If needed
      num: 0
    }
  }

  // STACKS
  homeStackScreen = (props) => {
    return (
      <homeStack.Navigator>
        <homeStack.Screen
        options={{
          headerLeft: () => (LeftToggle(props)),
        }}
        name="Home Screen" component={HomeScreen}/>
      </homeStack.Navigator>
    )
  }

  counterStackScreen = (props) => {
    return (
      <simpleCounterStack.Navigator>
        <simpleCounterStack.Screen
        options={{
          headerLeft: () => (LeftToggle(props)),
        }}
        name="Simple Counter Screen" component={SimpleCounterScreen} />
      </simpleCounterStack.Navigator>
    )
  }

  //Detail gets in this stack because it is part of Render Data
  renderDataStackScreen = (props) => {
    return (
      <renderDataStack.Navigator>
        <renderDataStack.Screen
        options={{
          headerLeft: () => (LeftToggle(props)),
        }}
        name="Render Data Screen" component={RenderDataScreen} />
        <renderDataStack.Screen 
        options={{
          headerLeft: () => (BackButton(props, "Render Data Screen")),
        }}
        name="Detail Screen" component={DetailScreen} />
      </renderDataStack.Navigator>
    )
  }
  render() {
    return (
      <bottomTab.Navigator
      tabBarOptions={{
        labelStyle:{
          marginBottom: 10,
          fontSize: 15,
          fontWeight: "bold",
        },
        tabStyle: {
          backgroundColor: "white",
          borderstyle: "solid",
          borderStartColor: "black"
        },
        activeBackgroundColor: "blue",
      }}>
        <bottomTab.Screen name="Home"
        component={this.homeStackScreen}/>
        <bottomTab.Screen name="Simple Counter"
        component={this.counterStackScreen}/>
        <bottomTab.Screen name="Render Data"
        component={this.renderDataStackScreen}/>
      </bottomTab.Navigator>
    )
  }
}