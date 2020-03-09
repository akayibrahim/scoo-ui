import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import RingButton from "./RingButton";
import Svg, { Path } from "react-native-svg";

function VehicleDetails(props) {
  const {id} = props;
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const getScooDetail = async () => {
      const request = "id=" + id;
      await fetchUtil('/scooter/get', request, this.state.requestUrl)          
          .then((response) => { setDetail(response); })
          .catch((error) => { console.error(error); });
    }
    getScooDetail();
  }, []);

  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.imageStackColumnRow}>
        <View style={styles.imageStackColumn}>
          <View style={styles.imageStack}>
            <Image
              source={require("../assets/images/20181221100543_86413.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.rect2}>
              <Text style={styles.text4}>{detail.label}</Text>
            </View>
          </View>
          <RingButton style={styles.ringButton}></RingButton>
        </View>
        <Svg
          viewBox="0 0 1.2799999999999727 189.04501541466988"
          style={styles.path}
        >
          <Path
            strokeWidth={2}
            fill="rgba(119,119,119,1)"
            stroke="rgba(174,174,174,1)"
            d="M1.28 40.05 C2.28 182.05 1.28 190.05 1.28 190.05 L2.28 189.05 C2.28 189.05 0.28 -101.95 1.28 40.05 Z"
          ></Path>
        </Svg>
        <View style={styles.text2Column}>
          <Text style={styles.text2}>BATTERY : % {detail.lastBattery}</Text>
          <Text style={styles.text3}>DISTANCE : 300 meter</Text>
          <Text style={styles.text}>
          3 TL to unlock + {"\n"}0.75 TL / 1 min
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 0
  },
  image: {
    top: 0,
    left: 19,
    width: 90,
    height: 90,
    position: "absolute"
  },
  rect2: {
    top: 5,
    left: 0,
    width: 55,
    height: 21,
    backgroundColor: "rgba(74,74,74,1)",
    position: "absolute"
  },
  text4: {
    color: "rgba(201,201,201,1)",
    fontSize: 12,
    fontFamily: "roboto-700",
    letterSpacing: 0,
    marginTop: 4,
    marginLeft: 3
  },
  imageStack: {
    width: 107,
    height: 87
  },
  ringButton: {
    width: 100,
    height: 24,
    backgroundColor: "rgba(15,15,15,1)",
    marginTop: 23,
    marginLeft: 19
  },
  imageStackColumn: {
    width: 119
  },
  path: {
    width: 1,
    height: 130,
    marginLeft: 22,
    marginTop: 5
  },
  text2: {
    width: 117,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 13,
    fontFamily: "roboto-700",
    lineHeight: 14,
    marginTop: 10
  },
  text3: {
    width: 131,
    height: 14,
    color: "rgba(0,0,0,1)",
    fontSize: 13,
    fontFamily: "roboto-700",
    lineHeight: 14,
    marginTop: 18
  },
  text: {
    width: 131,
    height: 28,
    color: "rgba(0,0,0,1)",
    fontSize: 15,
    fontFamily: "roboto-700",
    lineHeight: 14,
    marginTop: 18
  },
  text2Column: {
    width: 131,
    marginLeft: 14,
    marginTop: 19,
    marginBottom: 31
  },
  imageStackColumnRow: {
    height: 128,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 11,
    marginRight: 22
  }
});

export default VehicleDetails;
