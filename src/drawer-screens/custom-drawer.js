import React, {Component} from 'react'
import {globalStyling as gs} from '../styles/global-styling';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabComponent from '../bottomtab-screens/bottom-tab';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './profile';

const drawer = createDrawerNavigator();

const profileStack = createStackNavigator();
export default class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }

  // STACKS
  profileStackScreen = (props) => {
    return (
      <profileStack.Navigator>
        <profileStack.Screen
        options={{
          headerLeft: () => (this.backButton(props, "bottom-tab")),
        }}
        name="Profile Screen" component={ProfileScreen}/>
      </profileStack.Navigator>
    )
  }

  CustomDrawer = (props) => {
    return (
      <View>
      <View style={[
        gs.profileContainer, {
          backgroundColor: "#7ee0ce"
        }
      ]}>
        <Image source={require("../images/seele.jpg")}
        style={{
          width: 80,
          height: 80,
          borderRadius: 100,
          marginBottom: 10,
        }}
        />
        <Text style={{
          fontSize: 20
        }}>Seele Vollerei</Text>
        <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#40ad42",
          borderRadius: 1000,
          paddingVertical: 5,
          paddingHorizontal: 15,
        }}>
          <Text style={{
            color: "white",
            fontWeight: "bold"
          }}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* CUSTOM DRAWER ITEM */}
      <TouchableOpacity style={gs.drawerItem}
      onPress={() => props.navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={gs.drawerItem}
      onPress={() => props.navigation.navigate("Simple Counter")}>
        <Text>Simple Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={gs.drawerItem}
      onPress={() => props.navigation.navigate("Profile")}>
        <Text>View Profile</Text>
      </TouchableOpacity>

      {/* LIBRARY DRAWER ITEM */}
      {/* <DrawerItem
      label="Home"
      onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
      label="Simple Counter"
      onPress={() => props.navigation.navigate("Simple Counter")}
      /> */}
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

  render() {
    return (
      <drawer.Navigator
      drawerContent={props => <this.CustomDrawer {...props}/>}>
        <drawer.Screen name="bottom-tab"
        component={BottomTabComponent}/>
        <drawer.Screen name="Profile"
        component={this.profileStackScreen}/>
      </drawer.Navigator>
    )
  }
}