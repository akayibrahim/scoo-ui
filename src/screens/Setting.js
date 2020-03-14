import React, { Component, useState, useEffect} from "react";
import { AsyncStorage, Alert, TouchableOpacity, TouchableHighlight, StyleSheet, View, StatusBar, Text } from "react-native";
import Header from "../components/Header";
import RegisterFields from "../components/RegisterFields";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function Setting(props) {
  const headerText = "SETTING";
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
        const resParse = JSON.parse(response);        
        if (response != null && resParse.id != null) {
          setUserInfo(resParse);
          setFirstName(resParse.firstName);
          setLastName(resParse.lastName);
          setBirthDate(resParse.birthDate);
          setEmail(resParse.email);
          setId(resParse.id);
        } else {
          props.navigation.navigate('Login');
        }        
      })
      .catch((error) => {
        console.log(error);
        props.navigation.navigate('Login');
      });
    }
    getUserInfo();
  }, []);

  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} isBack={true} backScreen={'Main'} style={baseStyles.header}></Header>            
      <View style={styles.rect1}>
        <RegisterFields saveUpdateText={"UPDATE"} id={id} firstName={firstName} lastName={lastName} birthDate={birthDate} email={email} tyle={styles.register}></RegisterFields>        
      </View>
      <View style={styles.rect2}>
        <View style={styles.text2Row}>
          <Text style={styles.text2}>Rental Aggrement</Text>          
        </View>
        <MaterialIconsIcon name="chevron-right" style={styles.icon}></MaterialIconsIcon>
      </View>
      <View style={styles.rect3}>
        <View style={styles.text3Row}>
          <Text style={styles.text3}>Charger Aggrement</Text>          
        </View>
        <MaterialIconsIcon name="chevron-right" style={styles.icon}></MaterialIconsIcon>
      </View>
      <View style={styles.rect4}>
        <View style={styles.text4Row}>
          <Text style={styles.text4}>Term Of Service</Text>          
        </View>
        <MaterialIconsIcon name="chevron-right" style={styles.icon}></MaterialIconsIcon>
      </View>
      <View style={styles.rect5}>
        <View style={styles.text5Row}>
          <Text style={styles.text5}>Privacy Policy</Text>          
        </View>
        <MaterialIconsIcon name="chevron-right" style={styles.icon}></MaterialIconsIcon>
      </View>
      <TouchableHighlight onPress={() => logout(props)}>
        <View style={styles.rect6}>
          <Text style={styles.text6}>Log Out</Text>
        </View>
      </TouchableHighlight>      
      <Text style={styles.text}>1.0.0.v</Text>
    </View>
  );
}

logout = async (props) => {  
  await AsyncStorage.removeItem('userInfo').then(() => {
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
  rect1: {
    width: '100%',
    height: 285,
    flexDirection: "row",
    marginTop: 10
  },
  register: {
    flex: 1,
    backgroundColor: "transparent",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,    
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
