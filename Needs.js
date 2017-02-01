import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox';
import NeedItemPage from './Need';

export default class NeedPage extends Component {

  render() {
    return (
      <View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
        </View>
        <ScrollView>
          <NeedItemPage labelName='Photo ID'/>
          <NeedItemPage labelName='Health Insurance Card' />
          <NeedItemPage labelName='Health History' />
          <NeedItemPage labelName='List of Prescriptions' />
          <NeedItemPage labelName='Cell Phone / Charger' />
          <NeedItemPage labelName='Primary Doctor Information' />
          <NeedItemPage labelName='Small Amount of Cash' />
        </ScrollView>
      </View>
    );
  }
}
