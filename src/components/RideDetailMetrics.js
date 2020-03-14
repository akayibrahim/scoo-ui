import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function RideDetailMetrics(props) {
  const {distance, time, dateTime, price} = props;
  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.iconRow}>
        <FontAwesomeIcon
          name="map-marker"
          style={styles.icon}
        ></FontAwesomeIcon>
        <Text style={styles.text}>{distance}</Text>
        <MaterialCommunityIconsIcon
          name="clock"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.text2}>{time}</Text>
        <FontAwesomeIcon name="dollar" style={styles.icon3}></FontAwesomeIcon>
        <Text style={styles.text3}>{price}</Text>
      </View>
      <Text style={styles.text4}>{dateTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "rgba(15,15,15,1)"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 9
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 62
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 7
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginLeft: 52
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 8,
    marginTop: 1
  },
  iconRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 0,
    marginRight: 4
  },
  text4: {
    width: 267,
    height: 18,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "roboto-700",
    marginTop: -52,
    marginLeft: 0
  }
});

export default RideDetailMetrics;
