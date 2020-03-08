import React, { Component } from "react";
import { Alert, TouchableOpacity, TouchableHighlight, StyleSheet, View, StatusBar, Text } from "react-native";
import Header from "../components/Header";
import FirstNameEnter from "../components/FirstNameEnter";
import LastNameEnter from "../components/LastNameEnter";
import PhoneNumberInput from "../components/PhoneNumberInput";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import BaseCss from '../styles/BaseCss.js';
import { AsyncStorage } from "react-native";
const baseStyles = BaseCss()

function Setting(props) {
  const headerText = "SETTING";
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} isBack={true} backScreen={'Main'} style={baseStyles.header}></Header>
      <Text style={styles.text}>1.0.0.v</Text>
      <FirstNameEnter style={styles.firstNameEnter}></FirstNameEnter>
      <LastNameEnter style={styles.lastNameEnter}></LastNameEnter>
      <PhoneNumberInput style={styles.phoneNumberInput}></PhoneNumberInput>
      <TouchableOpacity style={[styles.button, props.style]} onPress={() => this.userRegister2(props)}>
          <Text style={styles.updateText}>UPDATE</Text>
      </TouchableOpacity>
      <View style={styles.rect2}>
        <View style={styles.text2Row}>
          <Text style={styles.text2}>Rental Aggrement</Text>          
        </View>
        <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon}
          ></MaterialIconsIcon>
      </View>
      <View style={styles.rect3}>
        <View style={styles.text3Row}>
          <Text style={styles.text3}>Charger Aggrement</Text>          
        </View>
        <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon}
          ></MaterialIconsIcon>
      </View>
      <View style={styles.rect4}>
        <View style={styles.text4Row}>
          <Text style={styles.text4}>Term Of Service</Text>          
        </View>
        <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon}
          ></MaterialIconsIcon>
      </View>
      <View style={styles.rect5}>
        <View style={styles.text5Row}>
          <Text style={styles.text5}>Privacy Policy</Text>          
        </View>
        <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon}
          ></MaterialIconsIcon>
      </View>
      <TouchableHighlight onPress={() => logout(props)}>
        <View style={styles.rect6}>
          <Text style={styles.text6}>Log Out</Text>
        </View>
      </TouchableHighlight>      
    </View>
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
  const response = await fetchUtil(this.state.host + this.state.registerUserApi, request, this.state.requestJson).then((response) => {    
    Alert.alert("Updated!")
  });
}


logout = async (props) => {  
  await AsyncStorage.removeItem('token').then(() => {
    console.log("logout");
    props.navigation.navigate('Login');
  });
};

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  text: {
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 667,
    textAlign: 'center'
  },
  firstNameEnter: {
    width: '90%',
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: -619,
    marginLeft: 22
  },
  lastNameEnter: {
    width: '90%',
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 22
  },
  phoneNumberInput: {
    width: '90%',
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 22
  },
  rect2: {
    width: '100%',
    height: 46,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    marginTop: 36
  },
  text2: {
    color: "rgba(155,155,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 6
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 40,
    marginEnd: 0,
    marginTop: 6
  },
  text2Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 22,
    marginTop: 8
  },
  rect3: {
    width: '100%',
    height: 46,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    marginTop: 2
  },
  text3: {
    color: "rgba(155,155,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 6
  },
  text3Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 22,
    marginTop: 8
  },
  rect4: {
    width: '100%',
    height: 46,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    marginTop: 2
  },
  text4: {
    color: "rgba(155,155,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 6
  },
  text4Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 22,
    marginTop: 8
  },
  rect5: {
    width: '100%',
    height: 46,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    marginTop: 2
  },
  text5: {
    color: "rgba(155,155,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 6
  },
  text5Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 5,
    marginLeft: 24,
    marginTop: 8
  },
  rect6: {
    width: '100%',
    height: 46,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 2
  },
  text6: {
    color: "rgba(155,155,155,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 14,
    marginLeft: 24
  },
  button: {
    backgroundColor: "rgba(33,33,33,1)",
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
    shadowRadius: 5,
    width: 242,
    height: 44,
    borderRadius: 18,
    borderColor: "#000000",
    borderWidth: 0,
    marginTop: 20,
    alignSelf: 'center'
  },
  updateText: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"    
  }
});

export default Setting;
