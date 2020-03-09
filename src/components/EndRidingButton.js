import React, { Component } from "react";
import { AsyncStorage, StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';

function EndRidingButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} 
    onPress={() =>       
      AsyncStorage.setItem('ridingStarted', 'false')
      .then(() => { 
        AsyncStorage.removeItem('ridingStartTime'); props.navigation.navigate('PicAfterParking'); 
      })
      .catch((error) => { console.log(error); }) }>
      <Text style={styles.text}>END RIDING</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(33,33,33,1)",
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
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default withNavigation(EndRidingButton);
