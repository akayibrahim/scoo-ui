import React, { Component, useState, useEffect } from "react";
import { AsyncStorage, StyleSheet, View, StatusBar } from "react-native";
import RegisterFields from "../components/RegisterFields";
import Header from "../components/Header";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function Register(props) {    
  const headerText = "REGISTER";
  const [userInfo, setUserInfo] = useState({});
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [birthDate, setBirthDate] = useState();
  const [email, setEmail] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    const getUserInfo = async () => {
      await AsyncStorage.getItem('userInfo')
      .then((response) => {
        setUserInfo(JSON.parse(response));
        setFirstName(userInfo.firstName);
          setLastName(userInfo.lastName);
          setBirthDate(userInfo.birthDate);
          setEmail(userInfo.email);
          setId(userInfo.id);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    getUserInfo();
  }, []);

  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} isBack={true} backScreen={'Login'} style={baseStyles.header}></Header>
      <RegisterFields id={id} firstName={firstName} lastName={lastName} birthDate={birthDate} email={email} style={styles.register}></RegisterFields>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)",
  },
  register: {
    width: '100%',
    height: 260,
    flexDirection: "row",
    marginTop: 36
  }
});

export default Register;
