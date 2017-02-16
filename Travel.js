import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
// import axios from 'axios';
// import Button from 'react-native-button';
import MapView from 'react-native-maps';
import HomePage from './Home';



export default class TravelPage extends Component {

  render() {
    return (
      <View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
      </View>
      <MapView style={styles.map}
         provider={this.props.provider}
         style={styles.map}
         region={{
           latitude: 25.7617,
           longitude: -80.1918,
           latitudeDelta: .12,
           longitudeDelta: .12
                  }}>
       </MapView>
      </View>
    );
}
}
TravelPage.propTypes = {
  provider: MapView.ProviderPropType
};

const styles = StyleSheet.create({
  map: {
    height: 500,
    width: 500,
  },
})
