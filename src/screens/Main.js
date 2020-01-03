import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import MainHeader from "../components/MainHeader";
import MapView from "react-native-maps";
import RideButton from "../components/RideButton";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import VehicleDetails from "../components/VehicleDetails";

function Main(props) {
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <MainHeader style={styles.mainHeader}></MainHeader>
      <View style={styles.mapViewStackRow}>
        <View style={styles.mapViewStack}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            customMapStyle={[]}
            style={styles.mapView}
          ></MapView>
          <RideButton style={styles.rideButton}></RideButton>
          <MaterialIconsIcon
            name="my-location"
            style={styles.icon}
          ></MaterialIconsIcon>
          <VehicleDetails style={styles.vehicleDetails}></VehicleDetails>
          <MaterialIconsIcon
            name="location-searching"
            style={styles.icon2}
          ></MaterialIconsIcon>
        </View>
        <Text style={styles.text}>Lorem Ipsum</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  mainHeader: {
    width: 375,
    height: 56,
    marginTop: 31
  },
  mapView: {
    height: 725,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute"
  },
  rideButton: {
    top: 621,
    width: 150,
    height: 44,
    position: "absolute",
    left: 113
  },
  icon: {
    color: "rgba(0,0,0,0.9)",
    fontSize: 35,
    overflow: "hidden",
    left: 320,
    top: 14,
    position: "absolute",
    opacity: 0.9
  },
  vehicleDetails: {
    top: 82,
    left: 27,
    width: 320,
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
    overflow: "hidden"
  },
  icon2: {
    top: 19,
    left: 279,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    opacity: 0
  },
  mapViewStack: {
    width: 375,
    height: 725
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginLeft: 210,
    marginTop: 49
  },
  mapViewStackRow: {
    height: 725,
    flexDirection: "row",
    marginRight: -211
  }
});

export default Main;
