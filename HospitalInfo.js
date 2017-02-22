import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Autolink from 'react-native-autolink';
import Button from 'react-native-button';


export default class HospitalInfoPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      description: null
    }
  }

componentDidMount(){
  this.getData()
}

  getData(){
  axios.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + this.props.hospital.place_id + "&key=AIzaSyBBg_IhpIatNPRT6HQRoWX35q2cQXEDL6Q")
  .then((response)=> {
    console.log(response.data)
    let newInfo = response.data.result;
    this.setState({
      description: newInfo
    })
  })
  .catch((error)=>{
       console.log("Api call error");
       alert(error.message);
    });
}

  render() {
    return(
      <View style={styles.hospitalDetail} >
        <Text style={styles.nameDetail} >
          {this.state.description !== null ? this.state.description.name : this.props.hospital.name }
        </Text>
        <Text style={styles.addressDetail} >
          {this.state.description !== null ? this.state.description.formatted_address : this.props.hospital.name }
        </Text>
        <View style= {{alignItems:'center'}}>
          <Text>Website:</Text>
          <Autolink
            style={styles.webDetail}
            linkStyle={styles.webDetail}
            // text={this.state.description !== null ? this.state.description.website : ''}
            text={this.state.description !== null && this.state.description.website ? this.state.description.website : 'No Website Available'}
          />
          <Text>Phone Number:</Text>
          <Autolink
          style={styles.phoneDetail}
          linkStyle={styles.phoneDetail}
          // text={this.state.description !== null ? this.state.description.formatted_phone_number : ''}
          text={this.state.description !== null && this.state.description.formatted_phone_number ? this.state.description.formatted_phone_number : 'No Phone Number Available'}

        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  hospitalDetail: {
    width: 250,
    height:180,
    backgroundColor: 'lightgrey',
    flexDirection: 'column',
    flexGrow:1,
  },

  nameDetail: {
    color: 'black',
    marginBottom: 10,
    flexDirection: 'column',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
    padding:5
  },

  addressDetail: {
    color: 'black',
    alignSelf: 'center',
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5
  },

  phoneDetail: {
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop:15,
  },

  webDetail: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 16,
    marginTop:15,
    marginBottom: 10,
    textAlign: 'center'

  },
})
