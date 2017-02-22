import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TextInput} from 'react-native';
// import { createRouter, NavigationProvider, StackNavigation } from '@exponent/ex-navigation';
import Button from 'react-native-button';
import Router from './Router';
import TravelPage from './Travel';

export default class UpdatePage extends Component {
  static route = {
    title: 'travel',
}
  constructor(props) {
  super(props);
  this.state = {
    value:'',
  }
}

goToMap() {
  if (this.state.value === '' || this.state.value === null || this.state.value === 'undefined'){
    alert('You forgot your city!');
  }
}
  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image  style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
        <TextInput
            style={{height: 40, borderStyle:'solid',borderColor:'grey',borderWidth:2, textAlign:'center', marginTop: 200,marginLeft:50, marginRight:50}}
            placeholder="Type in your City"
            onChangeText={(value) => this.setState({value})}
            value={this.state.city}
          />
        <View>
          <Button
            style={{marginTop:20}}
            styleDisabled={{color: 'red'}}
            onPress={this.goToMap.bind(this)}> Find Hospital
          </Button>
        </View>
      </View>
     );
  }
}
