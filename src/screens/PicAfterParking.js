import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function PicAfterParking(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.rect1}></View>
      <Text style={styles.text1}>Take a picture of scoo.</Text>
      <Icon name="monochrome-photos" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  rect1: {
    width: '90%',
    height: 427,
    backgroundColor: "rgba(15,15,15,1)",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: 189,
    marginLeft: 23
  },
  text1: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: -500,
    alignSelf: 'center'
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    marginTop: 600,
    alignSelf: 'center'
  }
});

export default PicAfterParking;
