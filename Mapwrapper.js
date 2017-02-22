
import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MarkerImg from './hospital.png';
import TravelPage from './Travel';
import axios from 'axios';
import HospitalInfoPage from './HospitalInfo'

const ASPECT_RATIO = width / height;
const { width, height } = Dimensions.get('window');

const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const LATITUDE_DELTA= 0.0922;

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
      hospitals: this.props.hospitals,
      description: this.props.description,
      latitudeDelta: .0922,
      longitudeDelta: .0922,
    }
  }

  componentDidMount(){
    // this.setState({
    //   // latitudeDelta: .0922,
    //   // longitudeDelta: .0922,
    // })
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
              <MapView.Callout style={styles.calloutCont}>
                <HospitalInfoPage hospital={hospital}  style={styles.hospitalDetail}/>
              </MapView.Callout>
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

  // //   customView: {
  // //   width: 240,
  // //   height: 100,
  // // },
    calloutCont: {
      height:250,
      width:250
    },

    bubble: {
    width: 140,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#005371',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    borderColor: '#007a87',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#4da2ab',
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderWidth: 16,
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    alignSelf: 'center',
    marginTop: -0.5,
  }

})
