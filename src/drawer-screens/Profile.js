import React, {Component} from 'react';

import { globalStyling as gs } from '../styles/global-styling';
import { View, Text } from 'react-native';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={gs.mainContainer}>
        <Text>This is profile screen</Text>
      </View>
    )
  }
}