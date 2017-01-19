import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
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
      <View>
        {this.renderPage()}
        <View style={{flexDirection:'row', alignItems: 'stretch', padding: 10,marginTop:45, backgroundColor:'red' }}>
          <Tabs selected={this.state.page} style={{backgroundColor:'white'}} selectedStyle={{color:'red'}} onSelect={this.onTabSelect.bind(this)}>
              <Text name="NeedPage">Need</Text>
              <Text name="EmailPage">Email</Text>
              <Text name="UpdatePage">Update</Text>
              <Text name="TravelPage">Travel</Text>
          </Tabs>
        </View>
      </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
