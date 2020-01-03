import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import SettingHeader from "../components/SettingHeader";
import FirstNameEnter from "../components/FirstNameEnter";
import LastNameEnter from "../components/LastNameEnter";
import PhoneNumberInput from "../components/PhoneNumberInput";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Setting(props) {
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <SettingHeader style={styles.settingHeader}></SettingHeader>
      <Text style={styles.text}>1.0.0.v</Text>
      <FirstNameEnter
        textInput1=""
        style={styles.firstNameEnter}
      ></FirstNameEnter>
      <LastNameEnter style={styles.lastNameEnter}></LastNameEnter>
      <PhoneNumberInput style={styles.phoneNumberInput}></PhoneNumberInput>
      <View style={styles.rect2}>
        <View style={styles.text2Row}>
          <Text style={styles.text2}>Rental Aggrement</Text>
          <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon}
          ></MaterialIconsIcon>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.text3Row}>
          <Text style={styles.text3}>Charger Aggrement</Text>
          <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon2}
          ></MaterialIconsIcon>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.text4Row}>
          <Text style={styles.text4}>Term Of Service</Text>
          <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon3}
          ></MaterialIconsIcon>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.text5Row}>
          <Text style={styles.text5}>Privacy Policy</Text>
          <MaterialIconsIcon
            name="chevron-right"
            style={styles.icon4}
          ></MaterialIconsIcon>
        </View>
      </View>
      <View style={styles.rect6}>
        <Text style={styles.text6}>Log Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  settingHeader: {
    width: 375,
    height: 56,
    marginTop: 31
  },
  text: {
    color: "rgba(155,155,155,1)",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 667,
    marginLeft: 168
  },
  firstNameEnter: {
    width: 330,
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: -619,
    marginLeft: 22
  },
  lastNameEnter: {
    width: 330,
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 22
  },
  phoneNumberInput: {
    width: 330,
    height: 43,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    marginTop: 27,
    marginLeft: 22
  },
  rect2: {
    width: 375,
    height: 46,
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    marginTop: 86
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
    marginLeft: 164
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
    width: 375,
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
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginLeft: 152
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
    width: 375,
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
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 40,
    marginLeft: 181
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
    width: 375,
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
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 40,
    marginLeft: 195
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
    width: 375,
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
  }
});

export default Setting;