import React, {Component} from 'react';

// Style
import {globalStyling as gs} from '../styles/global-styling';
import { View, TextInput, Text, Alert } from 'react-native';

// Data
import ProfileData from '../dummy-data/profile-data.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: ProfileData.data[0].name,
    })
  }

  setName = (text) => {
    this.setState({name: text});
  }

  saveAlert = (newName) => {
    Alert.alert(
      "Warning",
      "Save changes?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => this.proceedSaving(newName),
        }
      ],
      {cancelable: false}
    )
  }

  saveHandler = (newName) => {
    this.saveAlert(newName);
  }

  proceedSaving = (newName) => {
    ProfileData.data[0].name = newName;
  }

  render() {
    return (
      <View style={[
        gs.mainContainer,
      ]}>
        <Text style={{marginBottom: 20}}>This is edit profile Screen</Text>
        <TextInput
        style={{
          width: "70%",
          borderStyle: "solid",
          borderColor: "black",
          borderWidth: 2,
          borderRadius: 1000,
          paddingVertical: 20,
          paddingHorizontal: 40,
          textAlign: "center",
          marginBottom: 20
        }}
        onChangeText={this.setName}/>

        <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#40ad42",
          borderRadius: 1000,
          paddingVertical: 5,
          paddingHorizontal: 15,
        }}
        onPress={() => this.saveHandler(this.state.name)}
        // onPress={this.saveAlert}
        >
          <Text style={{color: "white", fontWeight: "bold",}}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}