import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function NoRideHistory(props) {
  return (
    <View style={styles.rect2}>
      <Text style={styles.text}>There is no ride history.</Text>
    </View>
  );
}

const styles = StyleSheet.create({  
  rect2: {
    width: '100%',
    height: 82,
    backgroundColor: "rgba(15,15,15,1)"
  },
  text: {
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    marginTop: 28,
    marginLeft: 101
  }
});

export default NoRideHistory;
