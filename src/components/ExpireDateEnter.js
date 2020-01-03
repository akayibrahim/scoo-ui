import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function ExpireDateEnter(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <TextInput placeholder="MM/YY" style={styles.textInput}></TextInput>
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
    color: "rgba(74,74,74,1)",
    alignSelf: "stretch",
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8,
    fontSize: 16,
    fontFamily: "roboto-700",
    lineHeight: 16
  }
});

export default ExpireDateEnter;
