
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MarkerImg from './hospital.png';
import TravelPage from './Travel';
import axios from 'axios';

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE_DELTA= 0.0922;

const ASPECT_RATIO = width / height;
const { width, height } = Dimensions.get('window');


export default class MapwrapperPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      region:{
        latitude:this.props.center[1],
        longitude:this.props.center[0],
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    },
    center: {
        latitude: this.props.center[1],
        longitude: this.props.center[0],
      },
      markers: null,
      hospitals: this.props.churches,
      description: this.props.description
    }
  }

  componentDidMount(){
    this.setState({
      latitudeDelta: .0922,
      longitudeDelta: .0922,
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      hospitals: nextProps.hospitals,
      description: nextProps.description
    })
  }

  render(){
    return(
      <MapView
          provider={this.props.provider}
          style={styles.map}
          region={{
            latitude: this.props.center[1],
            longitude: this.props.center[0],
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta
          }}
        >
         {/*Marker Rendering*/}
         {this.props.hospitals.length === 0 ? null: this.state.hospitals.map((hospital) => {
           return (
           <MapView.Marker
           key = {hospital.id}
           coordinate= {{
             latitude: hospital.geometry.location.lat,
             longitude: hospital.geometry.location.lng,
             latitudeDelta: this.state.latitudeDelta,
             longitudeDelta: this.state.longitudeDelta
           }}
           image={MarkerImg}>

           </MapView.Marker>
         )
         })}

      </MapView>
    )
  }
}

MapwrapperPage.propTypes = {
  provider: MapView.ProviderPropType
};


  const styles = StyleSheet.create({

    map: {
      height: 500,
      width: 500,
    },


})
