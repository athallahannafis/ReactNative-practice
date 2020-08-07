import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {globalStyling as gs} from '../styles/global-styling';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={gs.mainContainer}>
        <Text style={{marginBottom: 20}}>
          This is screen for drawer or bottom tab navigation
        </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("bottom-tab")}>
          <Text>Click me to see differences of "Test me!"</Text>
        </TouchableOpacity>
      </View>
    )
  }
}