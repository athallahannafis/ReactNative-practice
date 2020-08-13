import React, {Component} from 'react'
import {globalStyling as gs} from '../styles/global-styling';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';

export default class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }

  render() {
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
        onPress={() => this.props.navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gs.drawerItem}
        onPress={() => this.props.navigation.navigate("Simple Counter")}>
          <Text>Simple Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={gs.drawerItem}
        onPress={() => this.props.navigation.navigate("Profile")}>
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
}