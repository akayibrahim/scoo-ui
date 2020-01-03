import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function AddCreditCard(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]}>
      <View style={styles.textRow}>
        <Text style={styles.text}>Add Credit Card</Text>
        <Icon name="chevron-right" style={styles.icon}></Icon>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(0,0,0,0.9)",
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
    flexDirection: "row"
  },
  text: {
    width: 134,
    height: 14,
    color: "#fff",
    fontSize: 16,
    fontFamily: "roboto-regular",
    marginTop: 8
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 158
  },
  textRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 44,
    marginLeft: 38,
    marginTop: 6
  }
});

export default AddCreditCard;
