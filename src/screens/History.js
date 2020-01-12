import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/Header";
import RideHistory from "../components/RideHistory";
import NoRideHistory from "../components/NoRideHistory";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function History(props) {
  const headerText = "HISTORY";
  const day = "TODAY, 16:22";
  const time = "8 DK";
  const price = "6 TL";
  const distance = "2 KM";
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <RideHistory style={styles.rideHistory} day={day} time={time} price={price} distance={distance}></RideHistory>
      <NoRideHistory style={styles.noRideHistory}></NoRideHistory>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  rideHistory: {
    width: '100%',
    height: 82
  },
  noRideHistory: {
    width: '100%',
    height: 82
  }
});

export default History;
