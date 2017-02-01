import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class NeedItemPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: true,
      unchecked: false
    }
  }
  render() {
    return (
        <View>
          <CheckBox containerStyle={{margin:20,paddingBottom:10, borderBottomWidth:2, borderStyle:'solid', borderBottomColor:'grey'}} label={this.props.labelName} checked={this.state.checked}
            onChange={(checked) => console.log('I am checked', checked)}/>
        </View>

    );
  }
}
