/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
// import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/screens/home';
import SimpleCounter from './src/screens/simpleCounter';
import RenderData from './src/screens/renderData';
import Detail from './src/screens/detail';

import Icon from 'react-native-vector-icons/Ionicons';

// Navigator
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const stack = createStackNavigator();
const drawer = createDrawerNavigator();

const homeStack = createStackNavigator();
const simpleCounterStack = createStackNavigator();
const renderDataStack = createStackNavigator();

const leftToggle = (param) => {
    return (
      <View
      style={{
        marginLeft: 20
      }}
      >
        <TouchableOpacity
        onPress={() => param.openDrawer()}
        >
          <Text>...</Text>
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
        <drawer.Navigator>
          <drawer.Screen name="Home" component={homeNav}/>
          <drawer.Screen name="Simple Counter"
          component={simpleCounterNav} />
          <drawer.Screen name="Render Data" component={renderDataNav} />
        </drawer.Navigator>
      </NavigationContainer>
    )
  };
};