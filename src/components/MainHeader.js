import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MainHeader(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <IoniconsIcon name="md-menu" style={styles.icon}></IoniconsIcon>
        </TouchableOpacity>
        <View style={styles.rect2}>
          <Text numberOfLines={1} style={styles.text}>
            SCOO
          </Text>
        </View>
      </View>
      <View style={styles.buttonRowFiller}></View>
      <TouchableOpacity style={styles.button2}>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "rgba(0,0,0,0.9)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  button: {
    padding: 11
  },
  icon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  rect2: {
    justifyContent: "center",
    marginLeft: 119,
    marginTop: 14
  },
  text: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-700",
    lineHeight: 18
  },
  buttonRow: {
    height: 46,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 5
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button2: {
    alignItems: "center",
    padding: 11,
    marginRight: 5,
    marginTop: 5
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  }
});

export default MainHeader;