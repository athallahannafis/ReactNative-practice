import React, {Component} from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const leftToggle = (props) => {
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

export default leftToggle;