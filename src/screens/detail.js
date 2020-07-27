import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {globalStyling as gs} from '../styles/global-styling';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <View style={gs.mainContainer}>
        <Text>
        {this.props.navigation.getParam("detail")}
        </Text>
      </View>
    )
  }
}