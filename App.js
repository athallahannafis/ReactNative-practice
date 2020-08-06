/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';

// Screens
import Home from './src/screens/home';
import SimpleCounter from './src/screens/simpleCounter';
import RenderData from './src/screens/renderData';
import Detail from './src/screens/detail';

import { Button, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {globalStyling as gs} from './src/styles/global-styling';

const stack = createStackNavigator();
const drawer = createDrawerNavigator();

const homeStack = createStackNavigator();
const simpleCounterStack = createStackNavigator();
const renderDataStack = createStackNavigator();

// DRAWER TOGGLER
const leftToggle = (param) => {
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
        onPress={() => param.openDrawer()}
        >
          <Image 
          style={{
            width: 20,
            height: 20,
          }}
          source={require("./src/images/drawer.png")} />
          {/* <Text>...</Text> */}
        </TouchableOpacity>
      </View>
    )
}

// ONE BY ONE
const homeNav = (props) => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
      options={{
        headerLeft: () => (leftToggle(props.navigation)),
      }}
      name="Home" component={Home}/>
    </homeStack.Navigator>
  )
}
const simpleCounterNav = (props) => {
  return (
    <simpleCounterStack.Navigator>
      <simpleCounterStack.Screen
      options={{
        headerLeft: () => (leftToggle(props.navigation)),
      }}
      name="Simple Counter" component={SimpleCounter} />
    </simpleCounterStack.Navigator>
  )
}

/**
 * Detail gets in this stack because it is part of Render Data
 */
const renderDataNav = (props) => {
  return (
    <renderDataStack.Navigator>
      <renderDataStack.Screen
      options={{
        headerLeft: () => (leftToggle(props.navigation)),
      }}
      name="Render Data" component={RenderData} />
      <renderDataStack.Screen name="Detail" component={Detail} />
    </renderDataStack.Navigator>
  )
}


const MyProfile = (props) => {
  return (
    <View>
      <View style={[
        gs.profileContainer,
      ]}>
        <Text>Put your profile here</Text>
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

export default class App extends Component {
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
        <drawer.Navigator drawerContent={props => <MyProfile {...props} />}>
          <drawer.Screen name="Home" component={homeNav}/>
          <drawer.Screen name="Simple Counter"
          component={simpleCounterNav} />
          <drawer.Screen name="Render Data" component={renderDataNav} />
        </drawer.Navigator>
      </NavigationContainer>
    )
  };
};