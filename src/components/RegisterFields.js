import React, { useState, useEffect } from "react";
import { Alert, AsyncStorage, Text, TouchableOpacity, DatePicker, StyleSheet, View, TextInput } from "react-native";
import { withNavigation } from 'react-navigation';
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function RegisterFields(props) {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [birthDate, setBirthDate] = useState(props.birthDate);
  const [email, setEmail] = useState(props.email);
  const [id, setId] = useState(props.id);

  return (
    <View style={styles.rect}>
      <TextInput placeholderTextColor = "gray" placeholder="First Name" style={styles.firstName}
        onChangeText={(text) => setFirstName(text)}>{props.firstName}</TextInput>
      <TextInput placeholderTextColor = "gray" placeholder="Last Name" style={styles.lastName}
        onChangeText={(lastName) => setLastName(lastName)}>{props.lastName}</TextInput>
      <TextInput placeholderTextColor = "gray" style={styles.birthDate} placeholder="Birth Date">{props.birthDate}</TextInput>
      <TextInput placeholderTextColor = "gray" placeholder="Email" style={styles.email}
        onChangeText={(email) => setEmail(email)}>{props.email}</TextInput>
      <TouchableOpacity style={styles.button} onPress={() => this.userRegister2(props, firstName, lastName, email, birthDate, id)}>
        <Text style={styles.text}>{props.saveUpdateText}</Text>
      </TouchableOpacity>
    </View>
  );
}
// <DatePicker mode={'date'} format="YYYY-MM-DD" minDate="1950-01-01" maxDate="2100-01-01" confirmBtnText="Confirm" 
// cancelBtnText="Cancel" hideText={true} onDateChange={(date) => this.state = {birthDate: date}} />
      
userRegister = async (props, firstName, lastName, email, birthDate, id) => {
  const request = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    email: email,
    id: id,
    birthDate: birthDate
  });
  const response = await fetchUtil('/user/register', request, 'json').then((response) => {    
    Alert.alert("Updated!")
  });
}

userRegister2 = async (props, firstName, lastName, email, birthDate, id) => {
  const request = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    email: email,
    id: id,
    //birthDate: birthDate
  });  
  await fetchUtil('/user/register', request, 'json')
  .then((response) => {    
    const user = {
      id: response.id,
      firstName: response.firstName,
      lastName: response.lastName,
      email: response.email,
      //birthDate: response.birthDate
    };    
    AsyncStorage.setItem('userInfo', JSON.stringify(user))
    .then(() => {
      props.navigation.navigate('Main');
    })
    .catch((error) => {
      console.log(error);
    });
  });
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "transparent",
    flex: 1,
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 0
  },
  button: {
    width: '60%',
    height: 44,
    borderRadius: 18,
    borderColor: "gray",
    borderWidth: 1,        
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    alignSelf: 'center',
  },
  firstName: {
    color: "white",
    alignSelf: "center",
    marginLeft: 5,
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 19,
    width: '90%',  
    height:44,  
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1
  },
  lastName: {
    color: "white",
    alignSelf: "center",
    marginLeft: 5,
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 19,
    width: '90%',  
    height:44,    
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 20,
  },
  email: {
    color: "white",
    alignSelf: "center",
    marginLeft: 5,
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 19,
    width: '90%',    
    height:44,  
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 20
  },
  birthDate: {
    color: "white",
    alignSelf: "center",
    marginLeft: 5,
    paddingLeft: 5,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 19,
    width: '90%',
    height:44,  
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 20
  }
});

export default withNavigation(RegisterFields);