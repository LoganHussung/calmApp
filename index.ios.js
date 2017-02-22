import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';

import StatusBarBackground from './StatusBarBackground';
import Navigation from './Navigation';


export default class calmApp extends Component {
  render() {
    return (
      <View>
        <StatusBarBackground />
        <View>
          <Navigation />
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('calmApp', () => calmApp);
