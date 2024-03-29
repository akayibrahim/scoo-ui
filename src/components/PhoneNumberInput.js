import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function PhoneNumberInput(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <TextInput placeholderTextColor = "gray" placeholder="Phone Number" style={baseStyles.settingTextInput}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  }
});

export default PhoneNumberInput;
