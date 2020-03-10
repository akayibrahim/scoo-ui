import React, { Component, useEffect, useState } from "react";
import { AsyncStorage, Image, Alert, StyleSheet, View, StatusBar, Text } from "react-native";
import Header from "../components/Header";
import MapView from "react-native-maps";
import RideButton from "../components/RideButton";
import VehicleDetails from "../components/VehicleDetails";
import BaseCss from '../styles/BaseCss.js';
import FetchUtil from "../util/FetchUtil";
import Icon from "react-native-vector-icons/FontAwesome";
const baseStyles = BaseCss()

function Main(props) {  
  const headerText = "SCOO";
  const [showVehicleDetail, setShowVehicleDetail] = useState(false);
  const [id, setId] = useState(0);
  const [scooters, setScooters] = useState([]);
  const [coordinates, setCoordinates] = useState({latitude: 41.0082, longitude: 28.9784, 
    latitudeDelta: 0.0040, longitudeDelta: 0.0040});
  isSignin(props);
  useEffect(() => {
    const closestScooters = async () => {
      const request = "latitude=1.0&longitude=1.0";
      await fetchUtil('/scooter/getClosestScooters', request, 'url')
          .then((response) => { setScooters(response); })
          .catch((error) => { console.error(error); });
    }
    closestScooters();
  }, []);

  useEffect(() => {    
    const findCoordinates = (props) => {
      navigator.geolocation.getCurrentPosition(
        position => {    
          // setCoordinates({longitude: position.longitude, latitude: position.latitude, latitudeDelta: 0.0040, longitudeDelta: 0.0040}); 
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };
    findCoordinates();
  }, [false]); // TODO 

  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <View style={baseStyles.mapViewStackRow}>
        <View style={baseStyles.mapViewStack}>
          <MapView
            provider={MapView.PROVIDER_GOOGLE}
            initialRegion={coordinates}
            customMapStyle={[]}
            style={baseStyles.mapView}
            showsMyLocationButton={true}
            showsUserLocation={true}
            followsUserLocation={true}
          >
          {            
              scooters != undefined ? scooters.map((scoo, i) =>
                <MapView.Marker coordinate={{latitude: scoo.lastLatitude, longitude: scoo.lastLongitude,}} key={i}
                onPress={() => {setShowVehicleDetail(!showVehicleDetail); setId(scoo.id);}}>
                  <Image source={require('../assets/images/mi365.jpg')} style={{ width: 30, height: 40 }} />
                </MapView.Marker>
              ) : null
          }
          </MapView>
          <RideButton style={styles.rideButton}></RideButton>
          {showVehicleDetail ? <VehicleDetails id={id} style={styles.vehicleDetails}></VehicleDetails> : null}
        </View>
      </View>
    </View>
  );
}

const isSignin = async (props) => {  
  const value = await AsyncStorage.getItem('token')
  .catch((error) => {
    console.log(error);
  });  
  if (value == 'true') {
    const ridingInfo = await AsyncStorage.getItem('ridingInfo')
    .catch((error) => {
      console.log(error);
    });
    if (JSON.parse(ridingInfo).ridingStarted == true) {
      props.navigation.navigate('Riding');
    } else {
      props.navigation.navigate('Main');
    }        
  } else {
    props.navigation.navigate('Login');
  }
  return;
};

openPanel = () => {
  this.state = { swipeablePanelActive: true };
};

closePanel = () => {
  this.state = { swipeablePanelActive: false };
};

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15, 15,1)"
  },
  rideButton: {
    top: '85%',
    width: 150,
    height: 44,
    position: "absolute",
    alignSelf: 'center'
  },
  icon: {
    color: "rgba(0,0,0,0.9)",
    fontSize: 35,
    overflow: "hidden",
    right: 20,
    top: 14,
    position: "absolute",
    opacity: 0.9
  },
  vehicleDetails: {
    top: '7%',
    width: '85%',
    height: 175,
    position: "absolute",
    elevation: 15,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    overflow: "hidden",
    alignSelf: 'center'
  },
  icon2: {
    top: 19,
    right: 5,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    opacity: 0
  }
});

export default Main;
