import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function RidingInformation(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.iconRow}>
          <FontAwesomeIcon
            name="map-marker"
            style={styles.icon}
          ></FontAwesomeIcon>
          <Text style={styles.text}>2 KM</Text>
          <MaterialCommunityIconsIcon
            name="clock"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <Text style={styles.text2}>8 min</Text>
          <IoniconsIcon
            name="ios-battery-charging"
            style={styles.icon3}
          ></IoniconsIcon>
          <Text style={styles.text3}>44%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    opacity: 0.85
  },
  rect2: {
    width: '100%',
    height: 82,
    backgroundColor: "rgba(15,15,15,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 11,
    marginTop: 6
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 9,
    marginTop: 6
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginLeft: 64,
    marginTop: 6
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 7,
    marginTop: 6
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 30,
    width: 28,
    marginLeft: 60
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 5,
    marginTop: 6
  },
  iconRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 35,
    marginTop: 26
  }
});

export default RidingInformation;
