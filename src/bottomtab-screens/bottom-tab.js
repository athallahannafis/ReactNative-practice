/**
 * This file contains features which can only be accessed with bottom tab
 * navigator
 */

import React, {Component} from 'react';

// Screens
import HomeScreen from './home';
import DetailScreen from './detail';
import RenderDataScreen from './renderData';
import SimpleCounterScreen from './simpleCounter';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

  // DRAWER TOGGLER
  leftToggle = (props) => {
    return (
      <View style={{marginLeft: 20}}>
        <TouchableOpacity
        style={{width: 40,}}
        onPress={ () => props.navigation.openDrawer() }
        >
          <Image 
          style={{
            width: 20,
            height: 20,
          }}
          source={require("../images/drawer.png")} />
        </TouchableOpacity>
      </View>
    )
  }

  backButton = (props, destination) => {
    const backString = "<="
    return (
      <View style={{marginLeft: 10}}>
        <TouchableOpacity
        style={{
          width: 40,
          height: 40,
          flex: 0,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1000
        }} onPress={() => props.navigation.navigate(destination)}>
          {/* <Text style={{
            fontSize: 30,
          }}>{backString}</Text> */}
          <Image
          style={{
            width:40,
            height:40
          }}
          source={require('../images/back-icon.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }

  // STACKS
  homeStackScreen = (props) => {
    return (
      <homeStack.Navigator>
        <homeStack.Screen
        options={{
          headerLeft: () => (this.leftToggle(props)),
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
          headerLeft: () => (this.leftToggle(props)),
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
          headerLeft: () => (this.leftToggle(props)),
        }}
        name="Render Data Screen" component={RenderDataScreen} />
        <renderDataStack.Screen 
        options={{
          headerLeft: () => (this.backButton(props, "Render Data Screen")),
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