import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import PaymentHeader from "../components/PaymentHeader";
import AddCreditCard from "../components/AddCreditCard";
import CrediCardInformation from "../components/CrediCardInformation";

function Payment(props) {
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <PaymentHeader style={styles.paymentHeader}></PaymentHeader>
      <AddCreditCard style={styles.addCreditCard}></AddCreditCard>
      <Text style={styles.text}>Payment Methods</Text>
      <Text style={styles.text2}>3 TL to unlock + 0.75/min.</Text>
      <CrediCardInformation
        style={styles.crediCardInformation}
      ></CrediCardInformation>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  paymentHeader: {
    width: 375,
    height: 56,
    marginTop: 31
  },
  addCreditCard: {
    width: 375,
    height: 45,
    backgroundColor: "rgba(0,0,0,0.9)",
    marginTop: 37
  },
  text: {
    color: "rgba(117,113,113,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    textAlign: "left",
    marginTop: -68,
    marginLeft: 14
  },
  text2: {
    color: "rgba(117,113,113,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    marginTop: 601,
    marginLeft: 80
  },
  crediCardInformation: {
    width: 322,
    height: 150,
    marginTop: -535,
    marginLeft: 27
  }
});

export default Payment;
