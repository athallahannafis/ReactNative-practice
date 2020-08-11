import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {globalStyling as gs} from '../styles/global-styling';

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const detailData = this.props.route.params.detail;
    console.log(detailData);
    return (
      <View style={gs.mainContainer}>
        <Text key={detailData.id}>
        {detailData}
        </Text>
      </View>
    )
  }
}