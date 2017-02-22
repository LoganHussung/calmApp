import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import MapwrapperPage from './Mapwrapper';
import MapView from 'react-native-maps';

const { width, height } = Dimensions.get('window');


function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

class Markers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: this.props.center[1],
        longitude: this.props.center[0],
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [],
    };
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
          color: randomColor(),
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          onPress={(e) => this.onMapPress(e)}
          region={{
            latitude: this.props.center[1],
            longitude: this.props.center[0],
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta
          }}
        >
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={marker.color}
              region={{
                latitude: this.props.center[1],
                longitude: this.props.center[0],
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta
              }}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.setState({ markers: [] })}
            style={styles.bubble}
          >
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Markers.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  map: {
    height: 500,
    width: 500,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

module.exports = Markers;
