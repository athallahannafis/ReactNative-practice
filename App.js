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
import CustomDrawer from './src/drawer-screens/cutom-drawer';
import ProfileScreen from './src/drawer-screens/Profile';

import { Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {globalStyling as gs} from './src/styles/global-styling';

const drawer = createDrawerNavigator();
const bottomTab = createBottomTabNavigator();

// Must make the stack for each parent feature
const homeStack = createStackNavigator();
const simpleCounterStack = createStackNavigator();
const renderDataStack = createStackNavigator();
const profileStack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // if needed
      num: 0, 
    }
  }

  // ONE BY ONE
  /**
  * Each parent feature has one stack, and sub feature from the parent feature
  * needs to be in one stack with the parent, for example in this render data
  * practice.
  */
  profileStackScreen = (props) => {
    return (
      <profileStack.Navigator>
        <profileStack.Screen
        options={{
          headerLeft: () => (this.backButton(props, "bottom-tab")),
        }}
        name="Profile Screen" component={ProfileScreen} />
      </profileStack.Navigator>
    )
  }

  backButton = (props, destination) => {
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
          source={require('./src/images/back-icon.png')}
          />
        </TouchableOpacity>
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
        <drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}>
          <drawer.Screen name="bottom-tab"
          component={BottomTabComponent}/>
          <drawer.Screen name="Profile"
          component={this.profileStackScreen} />
        </drawer.Navigator>
      </NavigationContainer>
    )
  };
};