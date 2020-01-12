import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialUnderlineTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholderTextColor = "gray" placeholder={"Write a message"} style={styles.inputStyle} 
      numberOfLines={5} multiline={true}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderWidth: 1
  },
  inputStyle: {
    flex: 1,
    color: "white",
    alignSelf: "stretch",
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 8,
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
  }
});

export default MaterialUnderlineTextbox;
