import React, {Component} from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const backButton = (props, destination) => {
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

export default backButton;