import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import RidingStarted from "../components/RidingStarted";
import RidingMap from "../components/RidingMap";
import EndRidingButton from "../components/EndRidingButton";
import RidingInformation from "../components/RidingInformation";
import Icon from "react-native-vector-icons/MaterialIcons";

function Riding(props) {
  return (
    <View style={styles.rect}>
      <RidingStarted style={styles.ridingStarted}></RidingStarted>
      <View style={styles.ridingMapStack}>
        <RidingMap style={styles.ridingMap}></RidingMap>
        <EndRidingButton style={styles.endRidingButton}></EndRidingButton>
        <RidingInformation style={styles.ridingInformation}></RidingInformation>
        <Icon name="my-location" style={styles.icon}></Icon>
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
    width: 375,
    height: 56,
    backgroundColor: "rgba(15,15,15,1)",
    marginTop: 31
  },
  ridingMap: {
    top: 0,
    left: 0,
    width: 375,
    height: 726,
    position: "absolute"
  },
  endRidingButton: {
    top: 624,
    left: 64,
    width: 242,
    height: 44,
    position: "absolute",
    borderRadius: 18,
    borderColor: "#000000",
    borderWidth: 0
  },
  ridingInformation: {
    top: 64,
    left: 0,
    width: 375,
    height: 82,
    position: "absolute"
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
  ridingMapStack: {
    width: 375,
    height: 726
  }
});

export default Riding;
