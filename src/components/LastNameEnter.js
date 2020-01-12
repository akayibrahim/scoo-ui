import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function LastNameEnter(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <TextInput placeholderTextColor = "gray" placeholder="Last Name" style={baseStyles.settingTextInput}></TextInput>
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

export default LastNameEnter;
