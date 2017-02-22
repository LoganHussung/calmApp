import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity,TextInput} from 'react-native';
import axios from 'axios';
import Router from './Router';
import Button from 'react-native-button';
import MapView from 'react-native-maps';
import HomePage from './Home';


export default class TravelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitals: [],
      center:[0,1],
      markers:[],
      coordinates:[0,1],
      description: [],
      id:'',
      value:''
    };
  }
  //
  componentDidMount() {
    this.getCenter();
  }

  //request to get the two center coordinates from api
  getCenter() {
    // axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + this.props.route.params.city + ".json?access_token=sk.eyJ1IjoiaHVzc3UwNzIiLCJhIjoiY2l6YTU2cmJ5MDFyeDMwbzZ5eXNkZGhqZSJ9.o8pqt076DlvXFIeUAGxxpQ")
    // .then((response)=> {
    //   let newCenter = response.data.features[0].center.slice(0);
    //   let longLatCoordinates = newCenter;
    //   let latLongCoordinates = [longLatCoordinates[1], longLatCoordinates[0]];
    //   this.setState({
    //     center: newCenter,
    //     newItemValue: '',
    //     coordinates:latLongCoordinates
    //   })
      // axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=8000&location=" + this.state.coordinates + "&type=hospital&key=AIzaSyBBg_IhpIatNPRT6HQRoWX35q2cQXEDL6Q")
      // .then((response)=> {
      //   let newHospital = response.data.results;
      //   this.setState({
      //     hospital: newHospital
      //   })
      // })

  axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=8000&location=" + this.state.coordinates + "&type=hospital&key=AIzaSyBBg_IhpIatNPRT6HQRoWX35q2cQXEDL6Q")
    .then((response) => {
      console.log(response.data);
      let newID = response.data.results[0].place_id;
      this.setState({
        id: newID
      })
    })
    .catch(function (error) {
      console.log(error);
    })
}

submitCity(){
  alert('Hello')
}

  render() {
    return (
      <View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Image style={{marginTop:20}} source={require('./Images/calmLogo.png')} />
      </View>
      <TextInput
          style={{height: 40, borderStyle:'solid',borderColor:'grey',borderWidth:2, textAlign:'center', marginTop: 10,marginBottom: 10,marginLeft:50, marginRight:50}}
          placeholder="Type in your City"
          onChangeText={(value) => this.setState({value})}
          value={this.state.city}
        />
        <Button
          styleDisabled={{color: 'red'}}
          onPress={this.submitCity.bind(this)}>Go
        </Button>
      <MapView style={styles.map}
         provider={this.props.provider}
         style={styles.map}
         region={{
           latitude: 44.9778,
           longitude: -93.2650,
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
