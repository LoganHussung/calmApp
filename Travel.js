import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import axios from 'axios';
// import Button from 'react-native-button';
import MapView from 'react-native-maps';
import MapWrapper from './MapWrapper';
import HomePage from './Home';



export default class TravelPage extends Component {

  render() {
    return (
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
        <MapView style={styles.map}
         provider={this.props.provider}
         style={styles.map}
         region={{
           latitude: 39.8282,
           longitude: -98.5795,
           latitudeDelta: .0992,
           longitudeDelta: .0992
         }}>
 </MapView>
      </View>
    );
}
}
MapWrapper.propTypes = {
  provider: MapView.ProviderPropType
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
