import React, { Component } from "react";
import { AsyncStorage, StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';
import FetchUtil from "../util/FetchUtil";

function RegisterButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={() => this.userRegister2(props)}>
      <Text style={styles.text}>SAVE</Text>
    </TouchableOpacity>
  );
}

userRegister2 = async (props) => {
  const request = JSON.stringify({
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email,
    id: this.state.userId,
    birthDate: this.state.birthDate
  });
  console.log(request);
  const response = await fetchUtil('/user/register', request, this.state.requestJson).then((response) => {
    setToken('true');
    props.navigation.navigate('Main');
  });
}

const setToken = async (token) => {
  await AsyncStorage.setItem('token', token)
  .catch((error)=>{
    console.log(error);
 }); 
};

userRegisterOld = async (props) => {
  fetch('/user/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'credentials': "omit",
    },
    body: JSON.stringify({
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "id": this.state.userId
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {    
    this.state = { user: responseJson };
    props.navigation.navigate('Main');
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

export default withNavigation(RegisterButton);
