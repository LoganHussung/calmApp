import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image} from 'react-native';


export default class HomePage extends Component {

  render() {
    return (
      <View style={{alignItems:'center',marginTop:20}} >
        <Image style={{marginTop:200}} source={require('./Images/calmLogo.png')} />
        <Text style={{textAlign:'center', color:'grey'}}>Help for you, care for them.</Text>
      </View>

    );
  }
}
