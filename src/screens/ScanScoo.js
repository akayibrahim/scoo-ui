import React, { Component, useState, useEffect } from "react";
import { Alert, AsyncStorage, TouchableOpacity, StyleSheet, View, Text, StatusBar } from "react-native";
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
import FetchUtil from "../util/FetchUtil";
import Dialog from "react-native-dialog";

function ScanScoo(props) {
  const headerText = "SCAN A SCOO";
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [scooCode, setScooCode] = useState("SCOO-4");
  // setDialogVisible(true)
  // this.takePicture();
  let handleBarCodeScanned = ({ type, data }) => {    
    if (!scanned) {
      setScanned(true);
      console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
      getScooDetailAndStartRiding(props, setScanned, data, setDialogVisible);
    }    
  };

  if (hasPermission === null) {
     <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
     <Text>No access to camera</Text>;
  }
  closeDialog = () => {
    setDialogVisible(false);
  };
  openDialog = () => {
    setDialogVisible(true);
  };
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
        <TouchableOpacity onPress={this.openDialog}>
          <ScooCodeButton style={styles.scooCodeButton}></ScooCodeButton>
        </TouchableOpacity>        
        <FlashButton style={styles.flashButton}></FlashButton>
      </View>
      <Dialog.Container visible={dialogVisible}>
        <Dialog.Title>Enter Scoo Code</Dialog.Title>
        <Dialog.Description>You can read scoo code at middle of QR.</Dialog.Description>
        <Dialog.Input autoCapitalize="characters" onChangeText={(scooCode) => setScooCode(scooCode)}>SCOO-4</Dialog.Input>
        <Dialog.Button label="Cancel" onPress={this.closeDialog} />
        <Dialog.Button label="OK" onPress={() => {                    
          getScooDetailAndStartRiding(props, setScanned, scooCode, setDialogVisible);
        }} />
      </Dialog.Container>
      <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} style={styles.barcadeScanner}/>
      <Button title={'Tap to Scan Again'} onPress={() => handleBarCodeScanned} />
    </View>
  );
}

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.tapToScan}>{title}</Text>
  </TouchableOpacity>
);

function isObjectEmpty(obj){
  return obj != null && Object.getOwnPropertyNames(obj).length >= 1
}

getScooDetailAndStartRiding = async (props, setScanned, data, setDialogVisible) => {
  const request = "label=" + data;
  await fetchUtil('/scooter/getByLabel', request, 'url')          
      .then((response) => {         
        startToRidingAlert(props, response, setScanned, setDialogVisible);
      })
      .catch((error) => { console.error(error); });
}

startToRidingAlert = async(props, scooters, setScanned, setDialogVisible) => {
  if (isObjectEmpty(scooters)) {
    Alert.alert(
      'Scoo Locker Password',
      scooters.lockPassword,
      [
        {text: 'Cancel', onPress: () => {setScanned(false); console.log('Cancel Pressed!');} },
        {text: 'OK', onPress: () => {
          startToRiding(props, scooters, setScanned)
          setDialogVisible(false);
        }},    
      ],
      { cancelable: false }
    )
  }
}

startToRiding = async(props, scooters, setScanned) => {
  if (isObjectEmpty(scooters)) {
    const requestRiding = JSON.stringify({
      riding: {
        lockStatus: "UNLOCKED",
        scooterId: scooters.id,
        userId: this.state.userId
      },
      ridingCoordinates: {
        latitude: scooters.lastLatitude,
        longitude: scooters.lastLongitude,
        status: "START"
      }
    });
    await fetchUtil('/riding/start', requestRiding, 'json')
        .then((response) => {
          const riding = {
            ridingStarted: true,
            ridingId: response.id,
            ridingStartTime: new Date()
          };          
          AsyncStorage.setItem('ridingInfo', JSON.stringify(riding))
          .then(() => {
            props.navigation.navigate('Riding');
            console.log("Riding started!");
          })
          .catch((error) => {
            console.log(error);
          });       
        })
        .catch((error) => { console.error(error); });
  }
}

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
  fetch('/riding/start', {
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
  tapToScan: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 20,
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
    marginTop: 20,
    alignSelf: 'center'
  },
  price: {
    color: "rgba(155,155,155,1)",
    fontSize: 20,
    fontFamily: "roboto-700",
    lineHeight: 20,
    marginTop: 20,
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
