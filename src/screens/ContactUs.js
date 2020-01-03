import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import ContactUsHeader from "../components/ContactUsHeader";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";

function ContactUs(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <ContactUsHeader style={styles.materialHeader1}></ContactUsHeader>
      <MaterialUnderlineTextbox
        textInput1="Write a message"
        style={styles.materialUnderlineTextbox}
      ></MaterialUnderlineTextbox>
      <Text style={styles.today}>TODAY</Text>
      <View style={styles.rect}>
        <Text style={styles.hello}>Hello.</Text>
      </View>
      <Text style={styles.thankYou}>
        Thank you for contacting us, we will get back to you shortyly.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  materialHeader1: {
    width: 375,
    height: 56,
    marginTop: 32
  },
  materialUnderlineTextbox: {
    width: 360,
    height: 43,
    marginTop: 413,
    marginLeft: 10
  },
  today: {
    color: "rgba(155,155,155,1)",
    fontFamily: "roboto-regular",
    marginTop: -434,
    marginLeft: 165
  },
  rect: {
    width: 123,
    height: 50,
    backgroundColor: "rgba(155,155,155,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 33,
    marginLeft: 224
  },
  hello: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: 15,
    marginLeft: 36
  },
  thankYou: {
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 234,
    alignSelf: "center"
  }
});

export default ContactUs;
