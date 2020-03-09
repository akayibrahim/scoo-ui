import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Header from "../components/Header";
import AddCreditCard from "../components/AddCreditCard";
import CrediCardInformation from "../components/CrediCardInformation";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function Payment(props) {
  const headerText = "PAYMENT";
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} isBack={true} backScreen={'Main'} style={baseStyles.header}></Header>
      <Text style={styles.paymentMethodText}>Payment Methods</Text>
      <AddCreditCard style={styles.addCreditCard}></AddCreditCard>            
      <CrediCardInformation style={styles.crediCardInformation}></CrediCardInformation>
      <Text style={styles.priceText}>3 TL to unlock0.75/min.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  addCreditCard: {
    width: '100%',
    height: 45,
    backgroundColor: "rgba(0,0,0,0.9)",
    marginTop: 10
  },
  paymentMethodText: {
    color: "rgba(117,113,113,1)",
    fontSize: 14,
    fontFamily: "roboto-regular",
    lineHeight: 14,
    textAlign: "left",
    marginTop: 10,
    marginLeft: 14
  },
  priceText: {
    color: "rgba(117,113,113,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16,
    bottom: 100,
    position: 'absolute',
    alignSelf: 'center'
  },
  crediCardInformation: {
    width: '100%',
    height: 150,
    marginTop: 20,
    alignSelf: 'center'
  }
});

export default Payment;
