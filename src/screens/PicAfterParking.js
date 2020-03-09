import React, { Component, useState } from "react";
import { AsyncStorage, Image, TouchableOpacity, StyleSheet, View, StatusBar, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
var ImagePicker = require('expo-image-picker');

function PicAfterParking(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);  
  if (hasPermission === null) {
    <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
      <Text>No access to camera</Text>;
  }
  takePicture = async () => {
    await this.getPermissionAsync();
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 4]
    });
    if (cancelled === true) {
      return;
    }
    setSelectedImage(uri);
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {    
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      const { statusRoll } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Text style={styles.text1}>Take a picture of scoo in a park position.</Text>
      <View style={styles.rect1}>
        <Image
          source={{ uri: selectedImage }}
          style={styles.thumbnail}
        />
      </View>      
      <TouchableOpacity onPress={takePicture}>
        <Icon name="monochrome-photos" style={styles.icon}></Icon>
      </TouchableOpacity>
      {
        selectedImage != null ?
        <TouchableOpacity style={[styles.button, props.style]}
          onPress={() => 
            AsyncStorage.setItem('ridingStarted', 'false')
            .then(() => { 
              AsyncStorage.removeItem('ridingStartTime')
              .then(() => {
                console.log("u:"+this.state.userCoordinates);
                finishRiding(props);
                })
              })
              .catch((error) => { console.log(error); })
          }
          >
          <Text style={styles.text}>FINISH</Text>       
        </TouchableOpacity>
      : 
      null
      }      
    </View>
  );
}

finishRiding = async (props) => {
  const request = JSON.stringify({    
    ridingCoordinates: {
      latitude: this.state.userCoordinates.latitude,
      longitude: this.state.userCoordinates.longitude,
      ridingId: this.state.ridingId
    }
  });
  await fetchUtil('/riding/finish', request, 'json')          
      .then((response) => { 
        this.state = {ridingId: 0};
        console.log(response);
        props.navigation.navigate('Main'); })
        .catch((error) => { console.log(error); 
      })
      .catch((error) => { console.error(error); });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  text1: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-regular",
    marginTop: 80,
    alignSelf: 'center'
  },
  rect1: {
    width: '90%',
    height: 350,
    backgroundColor: "rgba(15,15,15,1)",
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    borderStyle: "dashed",
    marginTop: 50,
    marginLeft: 23
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 60,
    marginTop: 20,
    alignSelf: 'center'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
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
    position: "absolute",
    borderRadius: 18,
    borderColor: "#000000",
    borderWidth: 0,
    top: '90%',
    alignSelf: 'center'
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default PicAfterParking;
