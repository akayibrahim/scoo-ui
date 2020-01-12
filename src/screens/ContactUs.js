import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, StatusBar, Text } from "react-native";
import Header from "../components/Header";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function ContactUs(props) {
  const headerText = "CONTACT US";
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <Text style={styles.today}>TODAY</Text>
      <MaterialUnderlineTextbox style={styles.materialUnderlineTextbox}></MaterialUnderlineTextbox>      
      <View style={styles.rect}>
        <Text style={styles.hello}>Hello.</Text>
      </View>
      <TouchableOpacity style={[styles.sendButton]}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
      <Text style={styles.thankYou}>
        {'Thank you for contacting us, \n we will get back to you shortly.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  materialUnderlineTextbox: {
    width: '95%',
    height: 200,
    marginTop: 413,
    marginLeft: 10    
  },
  today: {
    color: "rgba(155,155,155,1)",
    fontFamily: "roboto-regular",
    marginTop: 20,
    alignSelf: 'center'
  },
  rect: {
    width: 80,
    height: 50,
    backgroundColor: "rgba(155,155,155,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 140,
    marginRight: 20,
    right: 0,
    position: "absolute"
  },
  hello: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    margin: 13
  },
  thankYou: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    textAlign: "center",
    bottom: 60,
    alignSelf: "center",
    position: 'absolute'
  },
  sendButton: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",    
    alignItems: 'center',
    elevation: 2,
    width: '35%',
    borderRadius: 4,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5,
    height: 38,
    marginTop: 10
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default ContactUs;
