import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function SettingHeader(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIconsIcon
          name="menu"
          style={styles.icon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <View style={styles.buttonFiller}>
        <View style={styles.rect2}>
          <Text numberOfLines={1} style={styles.text}>
            SETTING
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button2}>
        <MaterialCommunityIconsIcon
          name="dots-vertical"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  button: {
    padding: 11,
    marginLeft: 5,
    marginTop: 5
  },
  icon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  },
  rect2: {
    marginBottom: 19
  },
  text: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-regular",
    lineHeight: 18
  },
  buttonFiller: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button2: {
    alignItems: "center",
    padding: 11,
    marginRight: 5,
    marginTop: 5
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "Roboto",
    fontSize: 24
  }
});

export default SettingHeader;
