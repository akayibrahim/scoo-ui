import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function RideHistory(props) {
  const {day, distance, time, price} = props;  
  return (
    <View style={styles.rect2}>        
      <Text style={styles.textDay}>{day}</Text>
      <FontAwesomeIcon name="map-marker" style={styles.iconMap}></FontAwesomeIcon>
      <Text style={styles.textDistance}>{distance}</Text>
      <MaterialCommunityIconsIcon name="clock" style={styles.iconClock}></MaterialCommunityIconsIcon>
      <Text style={styles.textTime}>{time}</Text>
      <Text style={styles.textPrice}>{price}</Text>
      <MaterialIconsIcon name="navigate-next" style={styles.iconDetail}></MaterialIconsIcon>
    </View>
  );
}

const styles = StyleSheet.create({  
  rect2: {
    width: '100%',
    height: 82,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  textDay: {
    color: "#121212",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 15,
    marginLeft: 20
  },
  iconMap: {
    color: "rgba(128,128,128,1)",
    fontSize: 18,
    height: 18,
    width: 10,
    marginTop: 51.5,
    marginLeft: 20,
    position: "absolute"
  },
  textDistance: {
    color: "rgba(0,0,0,1)",
    opacity: 0.55,
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 50,
    marginLeft: 35,
    position: "absolute"
  },
  iconClock: {
    color: "rgba(128,128,128,1)",
    fontSize: 18,
    height: 18,
    width: 18,
    marginTop: 51.5,
    marginLeft: 130,
    position: "absolute"
  },
  textTime: {
    color: "rgba(0,0,0,1)",
    opacity: 0.55,
    fontSize: 18,
    fontFamily: "roboto-700",
    marginTop: 50,
    marginLeft: 150,
    position: "absolute"
  },
  textPrice: {
    color: "rgba(0,0,0,1)",
    opacity: 0.65,
    fontSize: 18,
    fontFamily: "roboto-700",
    marginRight: 50,
    marginTop: 30,
    position: "absolute",
    right: 0
  },
  iconDetail: {
    color: "rgba(128,128,128,1)",
    fontSize: 30,
    height: 30,
    width: 30,
    marginRight: 20,
    marginTop: 26,
    position: "absolute",
    right: 0
  }
});

export default RideHistory;
