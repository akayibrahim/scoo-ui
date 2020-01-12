import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/Header";
import MapView from "react-native-maps";
import RideDetailMetrics from "../components/RideDetailMetrics";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function RideDetailSummary(props) {
  const headerText = "DETAIL";
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <MapView
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            customMapStyle={[]}
            style={styles.materialMapView}
      ></MapView>
      <RideDetailMetrics style={styles.rideDetailMetrics}></RideDetailMetrics>
      <View style={styles.iconRow}>
        <EvilIconsIcon name="star" style={styles.icon}></EvilIconsIcon>
        <EvilIconsIcon name="star" style={styles.icon5}></EvilIconsIcon>
        <EvilIconsIcon name="star" style={styles.icon4}></EvilIconsIcon>
        <EvilIconsIcon name="star" style={styles.icon3}></EvilIconsIcon>
        <EvilIconsIcon name="star" style={styles.icon2}></EvilIconsIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  materialMapView: {
    width: '100%',
    height: '55%'
  },
  rideDetailMetrics: {
    width: '75%',
    height: 80,
    marginTop: 50,
    alignSelf: 'center'
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 25
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 30
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 29
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 31
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 50,
    alignSelf: 'center'
  }
});

export default RideDetailSummary;
