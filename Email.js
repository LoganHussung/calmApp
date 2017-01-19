import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

import Communications from 'react-native-communications';


export default class EmailPage extends Component {

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => Alert.alert('Email Should Open')
          // Communications.email(['hussu072@umn.edu', 'loganhussung89@gmail.com'],null,null,'Emergency Room','Hello, Blank is in the hospital.')
        }>
          <View>
            <Text >Send an email</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
