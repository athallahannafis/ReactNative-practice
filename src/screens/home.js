import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {globalStyling as gs} from '../styles/global-styling.js'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Home extends Component {
  // CONSTRUCTOR FOR NAVIGATION PURPOSE
  constructor(props) {
    super(props);
  }

  // FUNCTIONS
  menu1 = () => {
    this.props.navigation.navigate('Simple Counter');
  }
  menu2 = () => {
    this.props.navigation.navigate("Render Data");
  }
  render() {
    return (
      <View style={gs.mainContainer}>
        <View style={gs.columnContainer}>
          <Text>React-native practice app</Text>
          <Text>Choose one of them!</Text>

          <TouchableOpacity onPress={this.menu1} style={gs.menuButton}>
            <Text style={gs.globalFont}>Counting</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.menu2} style={gs.menuButton}>
            <Text style={gs.globalFont}>Render Data</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};


/**
 * Another way to export default, but I prefer above
 */
// export default function Screen1 ({navigation}) {
//   const pressHandler = () => {
//     navigation.navigate('s2');
//   }
//   return (
//     <View style={styles.mainContainer}>
//       <Text>
//         This is screen1
//       </Text>
//       <Button
//       title="Go to screen 2"
//       onPress={pressHandler}
//       />
//     </View>
//   )
// }
