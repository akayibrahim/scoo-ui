import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function RingButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]}>
      <Text style={styles.text}>RING</Text>
      <Icon name="bell-ring" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular"
  },
  icon: {
    top: 6,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 12
  }
});

export default RingButton;
