import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Login(props) {
  return (
    <View style={styles.rect}>
      <View style={styles.rect2}>
        <Text style={styles.text3}>EMAIL</Text>
      </View>
      <Text style={styles.text}>SCOO</Text>
      <View style={styles.rect3}>
        <Text style={styles.text2}>SIGN IN WITH APPLE</Text>
      </View>
      <Icon name="hand-scissors-o" style={styles.icon}></Icon>
      <Text style={styles.text4}>
        By continuing, I confirm that I am 18+ and agree Scoo&#39;s Term Of
        Service and Privacy Policy.
      </Text>
      <Text style={styles.text5}>Start Riding Now</Text>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  rect2: {
    width: 310,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 554,
    marginLeft: 32
  },
  text3: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    marginTop: 12,
    marginLeft: 132
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "roboto-700",
    letterSpacing: 10,
    marginTop: -326,
    marginLeft: 127
  },
  rect3: {
    width: 310,
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 195,
    marginLeft: 32
  },
  text2: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    marginTop: 12,
    marginLeft: 73
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 100,
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    marginTop: -385,
    marginLeft: 132
  },
  text4: {
    color: "rgba(155,155,155,1)",
    fontSize: 11,
    fontFamily: "roboto-regular",
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 209,
    marginLeft: 47
  },
  text5: {
    color: "rgba(255,0,0,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    letterSpacing: 2,
    marginTop: -123,
    marginLeft: 102
  }
});

export default Login;
