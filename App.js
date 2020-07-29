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


// Navigator
import Navigator from './route.js';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const stack = createStackNavigator();
const drawer = createDrawerNavigator();

const stackComponent = ({navigation}) => {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home}
      options={{
        title: "Home",
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()} >
            <Text>
              ...
            </Text>
          </TouchableOpacity>
        )
      }}/>
      <stack.Screen name="Simple Counter" component={SimpleCounter} />
      <stack.Screen name="Render Data" component={RenderData} />
      <stack.Screen name="Detail" component={Detail} />
    </stack.Navigator>
  )
}
export default class App extends Component {
  render() {
    // return (
    //   <Navigator/>
    // );
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
        <drawer.Navigator screenOptions={{
          
        }}>
          <drawer.Screen name="Home" component={stackComponent}/>
          <drawer.Screen name="Simple Counter"
          component={stackComponent} />
          <drawer.Screen name="Render Data" component={stackComponent} />
          <drawer.Screen name="Detail" component={stackComponent}/>
        </drawer.Navigator>
      </NavigationContainer>
    )
  };
};