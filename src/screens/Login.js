import React, { Component } from "react";
import { TouchableHighlight, StyleSheet, View, Text, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation } from 'react-navigation';
import { AsyncStorage } from "react-native";

function Login(props) {  
  isSignin(props);  
  return (
    <View style={styles.rect}>
      <Icon name="hand-scissors-o" style={styles.icon}></Icon>
      <Text style={styles.scooText}>SCOO</Text>
      <Text style={styles.startRidingText}>Start Riding Now</Text>
      <Text style={styles.comfirmText}>
        By continuing, I confirm that I am 18+ and agree Scoo&#39;s Term Of
        Service and Privacy Policy.
      </Text>
      <TouchableHighlight onPress={() => props.navigation.navigate('Register')}>
        <View style={styles.emailReact}>
          <Text style={styles.emailText}>EMAIL</Text>
        </View>
      </TouchableHighlight>      
      <View style={styles.signInAppleReact}>
        <Text style={styles.signInAppleText}>SIGN IN WITH APPLE</Text>
      </View>
      <StatusBar barStyle="light-content"></StatusBar>
    </View>
  );
}

const isSignin = async (props) => {  
  const value = await AsyncStorage.getItem('token')
  .catch((error) => {
    console.log(error);
  });
  if (value == 'true') {
    props.navigation.navigate('Main');
    return;
  }    
};

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 100,
    transform: [
      {
        rotate: "90.00deg"
      }
    ],
    marginTop: '40%',
    alignSelf: 'center'
  },
  scooText: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    fontFamily: "roboto-700",
    letterSpacing: 10,
    marginTop: 40,
    alignSelf: 'center'
  },
  comfirmText: {
    color: "rgba(155,155,155,1)",
    fontSize: 11,
    fontFamily: "roboto-regular",
    letterSpacing: 0,
    textAlign: "left",
    marginTop: 80,
    alignSelf: 'center',
    width: '85%'
  },
  startRidingText: {
    color: "rgba(255,0,0,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    letterSpacing: 2,
    marginTop: 60,
    alignSelf: 'center'
  },
  emailReact: {
    width: '85%',
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 30,
    marginLeft: 32
  },
  emailText: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    alignSelf: 'center',
    marginTop: 10
  },
  signInAppleReact: {
    width: '85%',
    height: 40,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 10,
    marginLeft: 32
  },
  signInAppleText: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "roboto-700",
    alignSelf: 'center',
    marginTop: 10
  }
});

export default withNavigation(Login);