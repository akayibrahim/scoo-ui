import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import FirstNameEnter from "../components/FirstNameEnter";
import LastNameEnter from "../components/LastNameEnter";
import BirdthDateEnter from "../components/BirdthDateEnter";
import RegisterButton from "../components/RegisterButton";
import Header from "../components/Header";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function Register(props) {
  const headerText = "REGISTER";
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <FirstNameEnter textInput1="" style={styles.firstNameEnter}></FirstNameEnter>
      <LastNameEnter style={styles.lastNameEnter}></LastNameEnter>
      <BirdthDateEnter style={styles.birdthDateEnter}></BirdthDateEnter>
      <RegisterButton style={styles.registerButton}></RegisterButton>            
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  firstNameEnter: {
    width: '90%',
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 150,
    marginLeft: 20
  },
  lastNameEnter: {
    width: '90%',
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 20
  },
  birdthDateEnter: {
    width: '90%',
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
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center'    
  }
});

export default Register;
