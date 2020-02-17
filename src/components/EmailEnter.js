import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function EmailEnter(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <TextInput placeholderTextColor = "gray" placeholder="Email" style={baseStyles.settingTextInput}
      onChangeText={(email) => this.state = ({email})}>{this.state.email}</TextInput>
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

export default EmailEnter;
