import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import StartToRide from "../components/StartToRide";
import ScooCodeButton from "../components/ScooCodeButton";
import FlashButton from "../components/FlashButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function ScanScoo(props) {
  return (
    <View style={styles.rect}>
      <StartToRide style={styles.startToRide}></StartToRide>
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
  startToRide: {
    width: 375,
    height: 56,
    marginTop: 31
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 113,
    marginLeft: 30
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
    marginLeft: 65,
    marginRight: 68
  },
  rect2: {
    width: 330,
    height: 330,
    backgroundColor: "rgba(15,15,15,1)",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: -412,
    marginLeft: 23
  },
  text2: {
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    lineHeight: 14,
    marginTop: -374,
    marginLeft: 72
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    marginTop: -141,
    marginLeft: 163
  }
});

export default ScanScoo;
