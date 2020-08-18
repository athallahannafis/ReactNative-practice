import React, {Component} from 'react'
import {globalStyling as gs} from '../styles/global-styling';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ProfileScreen from './profile';
import EditProfileScreen from './edit-profile';

// Bottom tab
import BottomTabComponent from '../bottomtab-screens/bottom-tab';

// Extra
import BackButton from '../extra-component/back-button';
import ProfileData from '../dummy-data/profile-data.json';
import Profile from './profile';

const drawer = createDrawerNavigator();

const profileStack = createStackNavigator();
const editProfileStack = createStackNavigator()

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
          headerLeft: () => (BackButton(props, "bottom-tab")),
        }}
        name="Profile Screen" component={ProfileScreen}/>
      </profileStack.Navigator>
    )
  }

  editProfileStackScreen = (props) => {
    return (
      <editProfileStack.Navigator>
        <editProfileStack.Screen
        options={{
          headerLeft: () => (BackButton(props, "bottom-tab")),
        }}
        name="Edit Profile Screen" component={EditProfileScreen}/>
      </editProfileStack.Navigator>
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
          }}>{ProfileData.data[0].name}</Text>
          <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#40ad42",
            borderRadius: 1000,
            paddingVertical: 5,
            paddingHorizontal: 15,
          }}
          onPress={() => props.navigation.navigate("Edit Profile")}>
            <Text style={{
              color: "white",
              fontWeight: "bold"
            }}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* CUSTOM DRAWER ITEM */}
        <TouchableOpacity style={gs.drawerItem}
        onPress={() => props.navigation.navigate("Profile")}>
          <Text>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gs.drawerItem}
        onPress={() => props.navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gs.drawerItem}
        onPress={() => props.navigation.navigate("Simple Counter")}>
          <Text>Simple Counter</Text>
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

  render() {
    return (
      <drawer.Navigator
      drawerContent={props => <this.CustomDrawer {...props}/>}>
        <drawer.Screen name="bottom-tab"
        component={BottomTabComponent}/>
        <drawer.Screen name="Profile"
        component={this.profileStackScreen}/>
        <drawer.Screen name="Edit Profile"
        component={this.editProfileStackScreen}/>
      </drawer.Navigator>
    )
  }
}