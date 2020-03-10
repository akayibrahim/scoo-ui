import React, { useEffect, useState } from "react";
import { AsyncStorage, StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function RidingInformation(props) {  
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState(0);
  const [battery, setBattery] = useState(90);

  useEffect(() => {
    const i_id = setInterval(() => {
      getAsyncDuration(setDuration);
    }, 1000);
    return () => {
      clearInterval(i_id);
    }
  },[]);  

  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.rect2}>
        <View style={styles.iconRow}>
          <FontAwesomeIcon name="map-marker" style={styles.icon}></FontAwesomeIcon>
          <Text style={styles.text}>{distance}</Text>
          <MaterialCommunityIconsIcon name="clock" style={styles.icon2}></MaterialCommunityIconsIcon>
          <Text style={styles.text2}>{duration}</Text>
          <IoniconsIcon name="ios-battery-charging" style={styles.icon3}></IoniconsIcon>
          <Text style={styles.text3}>{battery}%</Text>
        </View>
      </View>
    </View>
  );
}

function pad(n) {
  return (n < 10) ? ("0" + n) : n;
}

getAsyncDuration = async (setDuration) => {
  const value = await AsyncStorage.getItem('ridingInfo')
  .catch((error) => {
    console.log(error);
  });  
  if (JSON.parse(value) == null)
    return;
  const startDate = Math.floor(new Date(JSON.parse(value).ridingStartTime).getTime());
  const now = Math.floor(new Date().getTime());
  var diff = Math.floor((now - startDate) / (60 * 24));  
  var time = pad(Math.floor(diff /60)) + ':' +pad(diff % 60 );
  //console.log(time);
  setDuration(time);
};

const styles = StyleSheet.create({
  rect: {
    opacity: 0.85
  },
  rect2: {
    width: '100%',
    height: 82,
    backgroundColor: "rgba(15,15,15,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 11,
    marginTop: 6
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 9,
    marginTop: 6
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginLeft: 64,
    marginTop: 6
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 7,
    marginTop: 6
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 30,
    width: 28,
    marginLeft: 60
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    fontFamily: "roboto-700",
    marginLeft: 5,
    marginTop: 6
  },
  iconRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 35,
    marginTop: 26
  }
});

export default RidingInformation;
