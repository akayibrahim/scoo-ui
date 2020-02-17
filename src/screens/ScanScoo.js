import React, { Component, useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text, StatusBar } from "react-native";
import Header from "../components/Header";
import ScooCodeButton from "../components/ScooCodeButton";
import FlashButton from "../components/FlashButton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner';

function ScanScoo(props) {
  const headerText = "SCAN A SCOO";
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // this.takePicture();
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  
  if (hasPermission === null) {
     <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
     <Text>No access to camera</Text>;
  }
  return (    
    <View style={styles.rect}>    
      <View style={styles.bar}>
        <StatusBar translucent barStyle="light-content"></StatusBar>
      </View>        
      <Header headerText={headerText} isBack={true} backScreen={'Main'} style={styles.header}></Header>
      <Icon name="qrcode-scan" style={styles.icon}></Icon>
      <Text style={styles.text}>Scan QR code on the Scoo to start ride</Text>      
      <Text style={styles.price}>3 TL to unlock + 0.75/min.</Text>      
      <View style={styles.square}></View>
      <View style={styles.scooCodeButtonRow}>
        <ScooCodeButton style={styles.scooCodeButton}></ScooCodeButton>
        <FlashButton style={styles.flashButton}></FlashButton>
      </View>      
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcadeScanner}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

takePicture = async () => {
  await this.getPermissionAsync();
  const { cancelled, uri } = await ImagePicker.launchCameraAsync({
    allowsEditing: false,
  });
  this.state = { image: uri };
};

getPermissionAsync = async () => {
  if (Constants.platform.ios) {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted');
    //const { status } = await Permissions.askAsync(Permissions.CAMERA);
    //const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }
};

startRiding = async (props) => {      
  fetch(this.state.host + this.state.startRidingApi, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'credentials': "omit",
      },
      body: JSON.stringify({   
        "riding": {
          "scooterId": "1",
          "userId": "1"
        },
        "ridingCoordinates": {
          "latitude": 32.0000,
          "longitude": 21.3233
        }
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.state = { user: responseJson };      
    })
    .catch((error) => {
      console.error(error);
    });
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  bar: {
    backgroundColor: "rgba(0,0,0,0.9)",
    height: Constants.statusBarHeight
  },
  header: {
    width: '100%',
    height: '6.7%'
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 5,
    alignSelf: 'center'
  },
  scooCodeButton: {
    width: 100,
    height: 36,
    borderRadius: 15
  },
  flashButton: {
    width: 100,
    height: 36,
    borderRadius: 15,
    marginLeft: 42
  },
  scooCodeButtonRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 20,
    alignSelf: 'center'
  },
  square: {
    width: 330,
    height: 330,    
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: 5,
    alignSelf: 'center'
  },
  price: {
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    lineHeight: 20,
    marginTop: 10,
    marginLeft: 72
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    marginTop: 10,
    alignSelf: 'center'
  },
  barcadeScanner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1
  }
});

export default ScanScoo;
