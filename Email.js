import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';

import Communications from 'react-native-communications';


export default class EmailPage extends Component {
  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
        <TouchableOpacity onPress={() => Communications.email(null,null,null,'NAME Hopsitals Info','Hello, NAME has been rushed to the hospital. We are at BLANK in room number BLANK. We are here because BLANK has happened to BLANK. I will let you know when an apporpriate time to visit would be.')}>
          <View>
            <Text style={{textAlign:'center',marginTop:100,marginBottom:100}} >Send an email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.text(null,'Hello. BLANK is in the Hospital. We are at BLANK. We will let you know when vistors are welcome. Please keep BLANK in your thoughts.')}>
          <View>
            <Text style={{textAlign:'center',marginTop:100,marginBottom:100}} >Send a Text</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
