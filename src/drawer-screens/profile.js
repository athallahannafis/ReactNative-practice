import React, {Component} from 'react';

import { globalStyling as gs } from '../styles/global-styling';
import { View, Text, Image } from 'react-native';

// Data
import ProfileData from '../dummy-data/profile-data.json';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={gs.mainContainer}>
        <Image source={require("../images/seele.jpg")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          marginBottom: 10,}}/>
        <Text
        style={{marginBottom: 10, fontSize: 35}}>{ ProfileData.data[0].name }</Text>
        <Text
        style={{marginBottom: 10}}>{ ProfileData.data[0].detail }</Text>
      </View>
    )
  }
}