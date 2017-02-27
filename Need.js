import React, { Component } from 'react';
import { AsyncStorage, AppRegistry, StyleSheet, Text, View,Image,ScrollView} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class NeedItemPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
  }

  render() {
    return (
        <View>
          <CheckBox containerStyle={{margin:20,paddingBottom:10, borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#ED4F4F',}} label={this.props.labelName} checked={this.props.checked}
            onChange={this.props.whenChanged.bind(this, this.props.id)}/>
        </View>

    );
  }
}
