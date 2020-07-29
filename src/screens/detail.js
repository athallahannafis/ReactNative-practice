import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {globalStyling as gs} from '../styles/global-styling';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const detail = this.props.route.params;
    console.log(detail.detail);
    return (
      <View style={gs.mainContainer}>
        <Text key={detail.id}>
        {detail.detail}
        </Text>
      </View>
    )
  }
}