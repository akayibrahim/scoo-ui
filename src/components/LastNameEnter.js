import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function LastNameEnter(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <TextInput placeholder="Last Name" style={styles.textInput}></TextInput>
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
  },
  textInput: {
    flex: 1,
    color: "#000",
    alignSelf: "stretch",
    marginBottom: 10,
    marginLeft: 10,
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default LastNameEnter;
