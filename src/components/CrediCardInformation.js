import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CardEnterPlace from "./CardEnterPlace";
import ExpireDateEnter from "./ExpireDateEnter";
import Svg, { Path } from "react-native-svg";
import CvvEnter from "./CvvEnter";

function CrediCardInformation(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.cardReact}>
        <Text style={styles.creditCardText}>Credit Card</Text>
        <CardEnterPlace style={styles.cardEnterPlace}></CardEnterPlace>
      </View>
      <View style={styles.expireRect}>
        <View style={styles.expireTextStackRow}>
          <View style={styles.expireTextStack}>
            <Text style={styles.expireText}>Expiration</Text>
            <ExpireDateEnter style={styles.expireDateEnter}></ExpireDateEnter>
          </View>
          <Svg
            viewBox="0 0 1.2800000000002 59.91751308094797"
            style={styles.path}
          >
            <Path
              strokeWidth={1}
              fill="rgba(74,74,74,1)"
              stroke="rgba(230, 230, 230,1)"
              d="M1.00 11.92 C2.00 55.92 0.00 59.92 0.00 59.92 C0.00 59.92 0.00 -32.08 1.00 11.92 Z"
            ></Path>
          </Svg>
          <View style={styles.cvvTextStack}>
            <Text style={styles.cvvText}>CVV</Text>
            <CvvEnter style={styles.cvvEnter}></CvvEnter>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {},
  cardReact: {
    width: 322,
    height: 70,
    backgroundColor: "rgba(208,208,208,1)",
    alignSelf: 'center'
  },
  creditCardText: {
    color: "rgba(155,155,155,1)",
    fontSize: 12,
    fontFamily: "roboto-regular",
    marginTop: 12,
    marginLeft: 10
  },
  cardEnterPlace: {
    width: 288,
    height: 43,
    marginTop: 3,
    alignSelf: 'center'
  },
  expireRect: {
    width: 322,
    height: 70,
    backgroundColor: "rgba(208,208,208,1)",
    flexDirection: "row",
    marginTop: 10,
    alignSelf: 'center'
  },
  expireText: {
    top: 0,
    left: 0,
    color: "rgba(155,155,155,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  expireDateEnter: {
    top: 6,
    alignSelf: 'center',
    width: 100,
    height: 43,
    position: "absolute"
  },
  expireTextStack: {
    width: 100,
    height: 49,
    marginTop: 7
  },
  path: {
    width: 1,
    height: 50,
    marginLeft: 46
  },
  cvvText: {
    top: 0,
    left: 0,
    color: "rgba(155,155,155,1)",
    position: "absolute",
    fontSize: 12,
    fontFamily: "roboto-regular"
  },
  cvvEnter: {
    top: 6,
    left: 1,
    width: 111,
    height: 43,
    position: "absolute"
  },
  cvvTextStack: {
    width: 112,
    height: 49,
    marginLeft: 15,
    marginTop: 7
  },
  expireTextStackRow: {
    height: 56,
    flexDirection: "row",
    flex: 1,
    marginRight: 38,
    marginLeft: 10,
    marginTop: 9
  }
});

export default CrediCardInformation;
