import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image} from 'react-native';


export default class UpdatePage extends Component {
  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image  style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
        <Text>Welcome to the Update Page!</Text>
      </View>
     );
  }
}
