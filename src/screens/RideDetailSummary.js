import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import RideDetailHeader from "../components/RideDetailHeader";
import RideDetailMap from "../components/RideDetailMap";
import RideDetailMetrics from "../components/RideDetailMetrics";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function RideDetailSummary(props) {
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <RideDetailHeader style={styles.materialHeader1}></RideDetailHeader>
      <RideDetailMap style={styles.materialMapView}></RideDetailMap>
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
  materialHeader1: {
    width: 375,
    height: 56,
    marginTop: 31
  },
  materialMapView: {
    width: 375,
    height: 399
  },
  rideDetailMetrics: {
    width: 285,
    height: 80,
    marginTop: 42,
    marginLeft: 45
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
    marginTop: 24,
    marginLeft: 32,
    marginRight: 28
  }
});

export default RideDetailSummary;
