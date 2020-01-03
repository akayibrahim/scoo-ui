import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function RideHistory(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.textColumnRow}>
          <View style={styles.textColumn}>
            <Text style={styles.text}>TODAY, 16:22</Text>
            <View style={styles.icon2Row}>
              <FontAwesomeIcon
                name="map-marker"
                style={styles.icon2}
              ></FontAwesomeIcon>
              <Text style={styles.text3}>2 KM</Text>
              <MaterialCommunityIconsIcon
                name="clock"
                style={styles.icon}
              ></MaterialCommunityIconsIcon>
            </View>
          </View>
          <Text style={styles.text4}>8 DK</Text>
          <Text style={styles.text2}>6 TL</Text>
          <MaterialIconsIcon
            name="navigate-next"
            style={styles.icon3}
          ></MaterialIconsIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {},
  rect2: {
    width: 375,
    height: 82,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  text: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "roboto-700"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 18,
    height: 18,
    width: 10
  },
  text3: {
    color: "rgba(0,0,0,1)",
    opacity: 0.55,
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 10
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 18,
    height: 18,
    width: 18,
    marginLeft: 29
  },
  icon2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 17,
    marginRight: 1
  },
  textColumn: {
    width: 110
  },
  text4: {
    color: "rgba(0,0,0,1)",
    opacity: 0.55,
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 9,
    marginTop: 35
  },
  text2: {
    color: "rgba(0,0,0,1)",
    opacity: 0.65,
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 109,
    marginTop: 17
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 10,
    marginTop: 11
  },
  textColumnRow: {
    height: 53,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 23,
    marginRight: 11
  }
});

export default RideHistory;
