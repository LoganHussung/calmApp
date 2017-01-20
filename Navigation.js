import React, { Component, } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, ScrollView,Dimensions } from 'react-native';
import Tabs from 'react-native-tabs';

// WHEN I NEED TO IMPORT AND USE ICONS
// import Icon from 'react-native-vector-icons/Ionicons';
// import FAIcon from 'react-native-vector-icons/FontAwesome';


// IMPORT PAGES THAT NAVIGATION WILL LEAD TOO //
import HomePage from './Home';
import NeedPage from './Needs';
import EmailPage from './Email';
import UpdatePage from './Update';
import TravelPage from './Travel';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'HomePage',
    };
  }
  renderPage() {
      switch (this.state.page) {
      case 'HomePage':
        return <View><HomePage /></View>;

      case 'NeedPage':
        return <View><NeedPage /></View>;

      case 'EmailPage':
        return <View><EmailPage /></View>;

      case 'UpdatePage':
        return <View><UpdatePage /></View>;

      case 'TravelPage':
        return <View><TravelPage /></View>;

      default:
        return <View><HomePage /></View>;
      }
    };

    onTabSelect(e) {
      console.log(e.props.name);
      this.setState({page:e.props.name})
    }

  render() {
    var self= this;
    return (
      <View style={{height:height}}>
        {this.renderPage()}
          <Tabs selected={this.state.page} style={{position:'absolute', bottom:0,right:0, backgroundColor:'white', marginBottom:20,}} selectedStyle={{color:'red'}} onSelect={this.onTabSelect.bind(this)}>
              <Text name="NeedPage">Need</Text>
              <Text name="EmailPage">Email</Text>
              <Text name="UpdatePage">Update</Text>
              <Text name="TravelPage">Travel</Text>
          </Tabs>
      </View>
   );
  }
}
