import React, { Component, useEffect, useState } from "react";
import { Image, Alert, StyleSheet, View, StatusBar, Text } from "react-native";
import Header from "../components/Header";
import MapView from "react-native-maps";
import RideButton from "../components/RideButton";
import VehicleDetails from "../components/VehicleDetails";
import BaseCss from '../styles/BaseCss.js';
import FetchUtil from "../util/FetchUtil";
const baseStyles = BaseCss()

function Main(props) {  
  const headerText = "SCOO";
  const [showVehicleDetail, setShowVehicleDetail] = useState(false);
  const [scooters, setScooters] = useState([]);

  useEffect(() => {
    const closestScooters = async () => {
      const request = "latitude=1.0&longitude=1.0";
      await fetchUtil(this.state.host + this.state.getClosestScootersApi, request, this.state.requestUrl)          
          .then((response) => { setScooters(response); })
          .catch((error) => { console.error(error); });
    }
    closestScooters();
  }, []);

  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <View style={baseStyles.mapViewStackRow}>
        <View style={baseStyles.mapViewStack}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 41.0082,
              longitude: 28.9784,
              latitudeDelta: 0.0040,
              longitudeDelta: 0.0040
            }}
            customMapStyle={[]}
            style={baseStyles.mapView}
            showsMyLocationButton={true}
            showsUserLocation={true}
            followsUserLocation={true}
          >
          { 
            scooters.map((scoo, i) =>
              <MapView.Marker coordinate={{latitude: scoo.lastLatitude, longitude: scoo.lastLongitude,}} key={i}
               onPress={() => {setShowVehicleDetail(!showVehicleDetail)}}>
                <Image source={require('../assets/images/mi365.jpg')} style={{ width: 40, height: 40 }} />
              </MapView.Marker>
            )
          }          
          </MapView>
          <RideButton style={styles.rideButton}></RideButton>
          {showVehicleDetail ? <VehicleDetails style={styles.vehicleDetails}></VehicleDetails> : null}
        </View>
      </View>
    </View>
  );
}

openPanel = () => {
  this.state = { swipeablePanelActive: true };
};

closePanel = () => {
  this.state = { swipeablePanelActive: false };
};

findCoordinates = (props) => {
  navigator.geolocation.getCurrentPosition(
    position => {
      this.props.position = {position: {longitude: position.longitude, latitude: position.latitude}};            
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  rideButton: {
    top: '85%',
    width: 150,
    height: 44,
    position: "absolute",
    alignSelf: 'center'
  },
  icon: {
    color: "rgba(0,0,0,0.9)",
    fontSize: 35,
    overflow: "hidden",
    right: 20,
    top: 14,
    position: "absolute",
    opacity: 0.9
  },
  vehicleDetails: {
    top: '10%',
    width: '80%',
    height: 150,
    position: "absolute",
    elevation: 15,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    overflow: "hidden",
    alignSelf: 'center'
  },
  icon2: {
    top: 19,
    right: 5,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    opacity: 0
  }
});

export default Main;
