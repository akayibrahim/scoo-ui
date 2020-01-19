import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function RegisterButton(props) {    
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={() => this.userRegister()}>
      <Text style={styles.text}>SAVE</Text>
    </TouchableOpacity>
  );
}

userRegister = async (props) => {      
  fetch(this.state.host + '/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "firstName": this.state.firstName,
        "lastName": this.state.lastName
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.state = { user: responseJson };      
    })
    .catch((error) => {
      console.error(error);
    });
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default RegisterButton;
