import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image} from 'react-native';


export default class TravelPage extends Component {

  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
        <Text>Hello From Travel Page</Text>
      </View>
    );
  }
}
