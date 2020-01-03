import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import HistoryHeader from "../components/HistoryHeader";
import RideHistory from "../components/RideHistory";
import NoRideHistory from "../components/NoRideHistory";

function History(props) {
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <HistoryHeader style={styles.historyHeader}></HistoryHeader>
      <RideHistory style={styles.rideHistory}></RideHistory>
      <RideHistory style={styles.rideHistory2}></RideHistory>
      <RideHistory style={styles.rideHistory3}></RideHistory>
      <NoRideHistory style={styles.noRideHistory}></NoRideHistory>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  historyHeader: {
    width: 375,
    height: 56,
    marginTop: 31
  },
  rideHistory: {
    width: 375,
    height: 82
  },
  rideHistory2: {
    width: 375,
    height: 82,
    marginTop: 1
  },
  rideHistory3: {
    width: 375,
    height: 82,
    marginTop: 1
  },
  noRideHistory: {
    width: 375,
    height: 73
  }
});

export default History;
