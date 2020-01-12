import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/Header";
import MapView from "react-native-maps";
import EndRidingButton from "../components/EndRidingButton";
import RidingInformation from "../components/RidingInformation";
import Icon from "react-native-vector-icons/MaterialIcons";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function Riding(props) {
  const headerText = "RIDING";
  return (
    <View style={styles.rect}>
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
          <EndRidingButton style={styles.endRidingButton}></EndRidingButton>
          <RidingInformation style={styles.ridingInformation}></RidingInformation>
          <Icon name="my-location" style={styles.icon}></Icon>
        </View>
      </View>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  ridingStarted: {
    width: '100%',
    height: 56,
    backgroundColor: "rgba(15,15,15,1)",
    marginTop: 31
  },
  endRidingButton: {        
    width: 242,
    height: 44,
    position: "absolute",
    borderRadius: 18,
    borderColor: "#000000",
    borderWidth: 0,
    top: '85%',
    alignSelf: 'center'
  },
  ridingInformation: {
    top: 64,
    left: 0,
    width: '100%',
    height: 82,
    position: "absolute"
  },
  icon: {
    color: "rgba(0,0,0,0.9)",
    fontSize: 35,
    overflow: "hidden",
    right: 15,
    top: 14,
    position: "absolute",
    opacity: 0.9
  }
});

export default Riding;
