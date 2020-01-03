import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import FirstNameEnter from "../components/FirstNameEnter";
import LastNameEnter from "../components/LastNameEnter";
import BirdthDateEnter from "../components/BirdthDateEnter";
import RegisterButton from "../components/RegisterButton";
import RegisterHeader from "../components/RegisterHeader";

function Register(props) {
  return (
    <View style={styles.rect}>
      <FirstNameEnter
        textInput1=""
        style={styles.firstNameEnter}
      ></FirstNameEnter>
      <LastNameEnter style={styles.lastNameEnter}></LastNameEnter>
      <BirdthDateEnter style={styles.birdthDateEnter}></BirdthDateEnter>
      <RegisterButton style={styles.registerButton}></RegisterButton>
      <RegisterHeader style={styles.registerHeader}></RegisterHeader>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  firstNameEnter: {
    width: 330,
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 150,
    marginLeft: 20
  },
  lastNameEnter: {
    width: 330,
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 20
  },
  birdthDateEnter: {
    width: 330,
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 20
  },
  registerButton: {
    width: 242,
    height: 44,
    borderRadius: 18,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 378,
    marginLeft: 64
  },
  registerHeader: {
    width: 375,
    height: 56,
    marginTop: -724
  }
});

export default Register;
