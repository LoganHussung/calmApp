import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image, Alert, Button } from 'react-native';

import Communications from 'react-native-communications';


export default class EmailPage extends Component {
  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image style={{marginTop:20, marginBottom:50}} source={require('./Images/calmLogo.png')} />
          <TouchableOpacity style={{borderStyle:'solid',borderWidth:2,borderColor:'red',borderRadius:3,margin:25}}>
            <Button color ='#FF011B' title='Send an Email' onPress={() => Communications.email(null,null,null,'NAME Hopsitals Info','Hello, NAME has been rushed to the hospital. We are at BLANK in room number BLANK. We are here because BLANK has happened to BLANK. I will let you know when an apporpriate time to visit would be.')}/>
            {/* <Text style={{borderStyle:'solid',borderWidth:2,borderColor:'red',borderRadius:5, textAlign:'center',margin:20}} >Send an email</Text> */}
          </TouchableOpacity>
          <Text style={{marginBottom:20,padding:30}}>Click here to send an email to loved ones. Just change the "BLANKS" to personal information.</Text>
            <TouchableOpacity style={{borderStyle:'solid',borderWidth:2,borderColor:'red',borderRadius:3,margin:25}} >
              <Button color ='#FF011B' title='Send an Text' onPress={() => Communications.text(null,'Hello. BLANK is in the Hospital. We are at BLANK. We will let you know when vistors are welcome. Please keep BLANK in your thoughts.')}/>
              {/* <Text style={{borderStyle:'solid',borderWidth:2,borderColor:'red',borderRadius:5, textAlign:'center',margin:20}}>Send a Text</Text> */}
            </TouchableOpacity>
            <Text style={{marginBottom:20,padding:30}}>Click here to send a text to loved ones. Just change the "BLANKS" to personal information.</Text>
      </View>
    );
  }
}
