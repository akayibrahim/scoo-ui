import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Header from "../components/Header";
import ScooCodeButton from "../components/ScooCodeButton";
import FlashButton from "../components/FlashButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function ScanScoo(props) {
  const headerText = "SCAN A SCOO";
  return (
    <View style={styles.rect}>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <Text style={styles.text}>Scan QR code on the Scoo to start ride</Text>
      <View style={styles.scooCodeButtonRow}>
        <ScooCodeButton style={styles.scooCodeButton}></ScooCodeButton>
        <FlashButton style={styles.flashButton}></FlashButton>
      </View>
      <View style={styles.rect2}></View>
      <Text style={styles.text2}>3 TL to unlock + 0.75/min.</Text>
      <Icon name="qrcode-scan" style={styles.icon}></Icon>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 113,
    alignSelf: 'center'
  },
  scooCodeButton: {
    width: 100,
    height: 36,
    borderRadius: 15
  },
  flashButton: {
    width: 100,
    height: 36,
    borderRadius: 15,
    marginLeft: 42
  },
  scooCodeButtonRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 444,
    alignSelf: 'center'
  },
  rect2: {
    width: 330,
    height: 330,
    backgroundColor: "rgba(15,15,15,1)",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: -412,
    alignSelf: 'center'
  },
  text2: {
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    lineHeight: 20,
    marginTop: -374,
    marginLeft: 72
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    marginTop: -141,
    alignSelf: 'center'
  }
});

export default ScanScoo;
