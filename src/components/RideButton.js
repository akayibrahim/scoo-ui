import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';

function RideButton(props) {  
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={() => props.navigation.navigate('ScanScoo')}>
      <Text style={styles.text}>RIDE</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(0,0,0,0.9)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 8,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-700"
  }
});

export default withNavigation(RideButton);
