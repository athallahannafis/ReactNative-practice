/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';

// Screens
import Home from './src/screens/home';
import SimpleCounter from './src/screens/simpleCounter';
import RenderData from './src/screens/renderData';
import Detail from './src/screens/detail';

import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {globalStyling as gs} from './src/styles/global-styling';

const stack = createStackNavigator();
const drawer = createDrawerNavigator();

// Must make the stack for each parent feature
const homeStack = createStackNavigator();
const simpleCounterStack = createStackNavigator();
const renderDataStack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // if needed
      num: 0, 
    }
  }
  // DRAWER TOGGLER
  leftToggle = (props) => {
    return (
      <View
      style={{
        marginLeft: 20
      }}
      >
        <TouchableOpacity
        style={{
          width: 40,
        }}
        onPress={ () => props.navigation.openDrawer() }
        >
          <Image 
          style={{
            width: 20,
            height: 20,
          }}
          source={require("./src/images/drawer.png")} />
        </TouchableOpacity>
      </View>
    )
  }

  // ONE BY ONE
  /**
  * I assume each feature has one stack, and sub feature from the parent feature
  * needs to be in one stack with the parent, for example in this render data
  * practice.
  */
  homeNav = (props) => {
    return (
      <homeStack.Navigator>
        <homeStack.Screen
        options={{
          headerLeft: () => (this.leftToggle(props)),
        }}
        name="Home" component={Home}/>
      </homeStack.Navigator>
    )
  }
  simpleCounterNav = (props) => {
    return (
      <simpleCounterStack.Navigator>
        <simpleCounterStack.Screen
        options={{
          headerLeft: () => (this.leftToggle(props)),
        }}
        name="Simple Counter" component={SimpleCounter} />
      </simpleCounterStack.Navigator>
    )
  }

  /**
  * Detail gets in this stack because it is part of Render Data
  */
  renderDataNav = (props) => {
    return (
      <renderDataStack.Navigator>
        <renderDataStack.Screen
        options={{
          headerLeft: () => (this.leftToggle(props)),
        }}
        name="Render Data" component={RenderData} />
        <renderDataStack.Screen name="Detail" component={Detail} />
      </renderDataStack.Navigator>
    )
  }

  CustomDrawer = (props) => {
    return (
      <View>
        <View style={[
          gs.profileContainer,
        ]}>
          <Image source={require("./src/images/seele.jpg")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 100,
            marginBottom: 20,
          }}
          />
          <Text>Seele Vollerei</Text>
        </View>
        <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
        label="Simple Counter"
        onPress={() => props.navigation.navigate("Simple Counter")}
        />
      </View>
    )
  }


  render() {
    return (
      <NavigationContainer>
        {/* <stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor:"#009387",
          },
          headerTintColor: "white",
          headerTitleStyle: "bold",
        }}>
          <stack.Screen name="Home" component={Home}/>
          <stack.Screen name="Simple Counter" component={SimpleCounter} />
          <stack.Screen name="Render Data" component={RenderData} />
          <stack.Screen name="Detail" component={Detail}/>
        </stack.Navigator> */}
        <drawer.Navigator drawerContent={props => <this.CustomDrawer {...props} />}>
          
          <drawer.Screen name="Home" component={this.homeNav}/>
          <drawer.Screen name="Simple Counter"
          component={this.simpleCounterNav} />
          <drawer.Screen name="Render Data" component={this.renderDataNav} />
        </drawer.Navigator>
      </NavigationContainer>
    )
  };
};