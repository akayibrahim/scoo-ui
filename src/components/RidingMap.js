import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

function RidingMap(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <MapView customMapStyle={"undefined"} style={styles.mapView}></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "white"
  },
  mapView: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)"
  }
});

export default RidingMap;
