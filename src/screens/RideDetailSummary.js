import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/Header";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import RideDetailMetrics from "../components/RideDetailMetrics";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function RideDetailSummary(props) {  
  const headerText = "DETAIL";
  return (
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} isBack={true} backScreen={'History'} style={baseStyles.header}></Header>
      <View style={baseStyles.mapViewStackRow}>
        <View style={baseStyles.mapViewStack}>
          <MapView
              provider={MapView.PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 41.0082,
                longitude: 28.9784,
                latitudeDelta: 0.0050,
                longitudeDelta: 0.0050
              }}
              customMapStyle={[]}
              style={baseStyles.mapView}              
          >
            <MapViewDirections
                origin={coordinates[0]}
                destination={coordinates[1]}
                apikey={"AIzaSyBABRYnBT8pbp7fgN8pEYEC9DeJhzH8m9I"}
                strokeWidth={3}
                strokeColor="hotpink"
              />
          </MapView>
        </View>
      </View>      
      <View style={styles.rectMetricsAndFeedback}>
        <RideDetailMetrics distance={props.navigation.state.params.distance} time={props.navigation.state.params.time} dateTime={props.navigation.state.params.day} price={props.navigation.state.params.price} style={styles.rideDetailMetrics}></RideDetailMetrics>
        <View style={styles.iconRow}>
          <EvilIconsIcon name="star" style={styles.feedback1}></EvilIconsIcon>
          <EvilIconsIcon name="star" style={styles.feedback2}></EvilIconsIcon>
          <EvilIconsIcon name="star" style={styles.feedback3}></EvilIconsIcon>
          <EvilIconsIcon name="star" style={styles.feedback4}></EvilIconsIcon>
          <EvilIconsIcon name="star" style={styles.feedback5}></EvilIconsIcon>
        </View>
      </View>      
    </View>
  );
}

const coordinates = [
  {
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    latitude: 41.0092,
    longitude: 28.9794,
  }
]

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  rideDetailMetrics: {
    width: '80%',
    height: 80,
    marginTop: 35,
    alignSelf: 'center'
  },
  feedback1: {
    color: "rgba(255,255,255,1)",    
    fontSize: 40
  },
  feedback2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 25
  },
  feedback3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 30
  },
  feedback4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 29
  },
  feedback5: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 31
  },
  iconRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 30,
    alignSelf: 'center'
  },
  rectMetricsAndFeedback: {    
    backgroundColor: "rgba(15,15,15,1)",
    width: '100%',
    height: '35%',
    marginBottom: 0,
    bottom: 0,
    position: 'absolute'
  }
});

export default RideDetailSummary;
