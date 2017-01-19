import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

//Swipeable plugin
import Swipeable from 'react-native-swipeable';

const rightButtons = [
  <TouchableHighlight><Text>Item is packed</Text></TouchableHighlight>,
];

export default class NeedPage extends Component {
  swipeable = null;
  handleUserBeganScrollingParentView() {
    this.swipeable.recenter();
  }

  render() {
    return (
      <View>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>Primary Doctor Information</Text>
        </Swipeable>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>List of Precriptions</Text>
        </Swipeable>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>Photo ID</Text>
        </Swipeable>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>Health Insurance Card</Text>
        </Swipeable>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>Health History </Text>
        </Swipeable>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>Cell Phone / Charger</Text>
        </Swipeable>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>Small amount of Cash</Text>
        </Swipeable>
        <Swipeable onRef={ref => this.swipeable = ref} rightButtons={rightButtons}>
          <Text style={styles.neededItem}>Health Care Directive</Text>
        </Swipeable>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  neededItem: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  }
});
