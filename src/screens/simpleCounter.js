import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {globalStyling as gs} from '../styles/global-styling.js';
import dummy from '../dummy-data/data.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SimpleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      dataRender: [],
    }
  }

  // FUNCTIONS
  fetchData = () => {
    console.log(dummy.data[1]);
    for (let i=0; i < dummy.length; i++) {
      console.log(dummy.data[i]);
    }
  }
  increment = () => {
    this.setState({num: this.state.num+1});
  }
  decrement = () => {
    this.setState({num: this.state.num-1});
  }
  pressHandler = () => {
    this.props.navigation.push('Welcome!');
  }
  render() {
    return (
      <View style={gs.mainContainer}>
        <Text>Let's start Counting!</Text>
        <View style={gs.columnContainer}>
          <Text style={[
          gs.columnSpacing,
          {fontWeight: "bold", fontSize: 40}]}> {this.state.num} </Text>
          {/* Button */}
          <View style={gs.rowContainer}>
            <TouchableOpacity style={[
            gs.squareButton,
            gs.rowSpacing]}
            onPress={this.decrement}>
              <Text style={gs.plusMinusFont}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[
            gs.squareButton,
            gs.rowSpacing]}
            onPress={this.increment}>
              <Text style={gs.plusMinusFont}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[
            gs.menuButton,
          ]}
          onPress={() => this.props.navigation.navigate("Render Data")}
          >
            <Text>Go to render data</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

/**
 * Another way to export, but I prefer above
 */
// export default function Screen2 ({navigation}) {
//   return (
//     <View style={styles.mainContainer}>
//       <Text>
//         This is screen2
//       </Text>
//     </View>
//   )
// }
