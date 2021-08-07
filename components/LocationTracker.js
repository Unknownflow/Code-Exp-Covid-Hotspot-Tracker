import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';

//const LOCATION_TASK_NAME = 'background-location-task';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function renderItem({ item }) {
  return (
    <View
      style={{
        backgroundColor: "#9bbff4",
        width: '100%',
        height: 8,
      }}></View>
  );
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
      error: '',
    };
  }

/*  _getLocationAsync = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      enableHighAccuracy: true,
      distanceInterval: 1,
      timeInterval: 60000,
    });
    // watchPositionAsync Return Lat & Long on Position Change
    this.location = await Location.watchPositionAsync(
      {
        enableHighAccuracy: true,
        distanceInterval: 1,
        timeInterval: 10000,
      },
      (newLocation) => {
        let { coords } = newLocation;
        // console.log(coords);
        let region = {
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.045,
        };
        this.setState({ region: region });
      },
      (error) => console.log(error)
    );
    return this.location; 
  }; */

/*  async componentWillMount() {
    // Asking for device location permission
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status === 'granted') {
      this._getLocationAsync();
    } else {
      this.setState({ error: 'Locations services needed' });
    } 
  } */

  render() {
    return (
      <View style={styles.container}>
        <MapView
        
          initialRegion={this.state.region}
          showsCompass={true}
          showsUserLocation={true}
          rotateEnabled={true}
          ref={(map) => {
            this.map = map;
          }}
          style={{ flex: 8}}>
          <Marker
            coordinate={{
              latitude: 1.2857943831190255,
              longitude: 103.82224754013306,
            }}
            title="115 Bukit Merah View"
          />
          <Marker
            coordinate={{
              latitude: 1.2863655611773854,
              longitude: 103.82803048958056,
            }}
            title="Tiong Bahru Plaza"
          />
          <Marker
            coordinate={{
              latitude: 1.3041111420274063,
              longitude: 103.83197265547574,
            }}
            title="ION Orchard"
            
          />
        </MapView>
        <Text style={{backgroundColor: "#9bbff4", }} >   Location                                               Distance/km</Text>
        <Text style={{backgroundColor: "#9bbff4", }} >   ION Orchard                                               14.94</Text>
        <Text style={{backgroundColor: "#9bbff4", }} >   Tiong Bahru Plaza                                     16.91</Text>
        <Text style={{backgroundColor: "#9bbff4", }} >   115 Bukit Merah View                               16.99</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});