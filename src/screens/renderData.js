import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {globalStyling as gs} from '../styles/global-styling';
import dummy from '../dummy-data/data.json';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

export default class RenderData extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      result: [],
    });
  }
  // METHODS
  fetchData = () => {
    for (let i = 0; i < dummy.data.length; i++) {
      this.state.result.push(dummy.data[i]);
    }
  }

  render() {
    this.fetchData();
    // Looping using map to render
    content = this.state.result.map((item) => {
      return(
        <View style={gs.columnContainer}>
          <TouchableOpacity style={[
            gs.selectionButton
          ]} 
          onPress={() => this.props.navigation.navigate("Detail", item.detail)}
          key={item.id}>
            <Text key={item.id}>{item.name}</Text>
            <Text>{item.npm}</Text>
          </TouchableOpacity>
        </View>
      );
    });
    return (
      <ScrollView>
        <View style={gs.mainContainer}>
          <Text>Screen for render practice</Text>
          {content}
        </View>
      </ScrollView>
    )
  }
}