import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function FlashButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]}>
      <Icon name="flashlight" style={styles.icon}></Icon>
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
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    transform: [
      {
        rotate: "45.00deg"
      }
    ],
    marginLeft: 31,
    marginTop: -3
  }
});

export default FlashButton;
