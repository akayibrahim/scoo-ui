import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Header from "../components/Header";
import MapView from "react-native-maps";
import RideButton from "../components/RideButton";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import VehicleDetails from "../components/VehicleDetails";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function Main(props) {
  const headerText = "SCOO";
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <View style={baseStyles.mapViewStackRow}>
        <View style={baseStyles.mapViewStack}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            customMapStyle={[]}
            style={baseStyles.mapView}
          ></MapView>
          <RideButton style={styles.rideButton}></RideButton>
          <MaterialIconsIcon name="my-location" style={styles.icon}></MaterialIconsIcon>
          <VehicleDetails style={styles.vehicleDetails}></VehicleDetails>
          <MaterialIconsIcon name="location-searching" style={styles.icon2}></MaterialIconsIcon>
        </View>
      </View>
    </View>
  );
}

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
