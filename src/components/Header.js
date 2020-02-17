import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { withNavigation } from 'react-navigation';

function Header(props) {  
  const {headerText, isBack, backScreen} = props;
  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.buttonRow}>
        {isBack == true ?
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate(backScreen)}>
            <IoniconsIcon name="md-arrow-back" style={styles.icon}></IoniconsIcon>
          </TouchableOpacity>
        : 
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.openDrawer()}>          
            <IoniconsIcon name="md-menu" style={styles.icon}></IoniconsIcon>
          </TouchableOpacity>          
        }
        
      </View>
      <View style={styles.headerContainer}>
          <Text numberOfLines={1} style={styles.text}>
            {headerText}
          </Text>
      </View>
      <View style={styles.buttonRowFiller}></View>
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
    backgroundColor: "rgba(0,0,0,0.9)",
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
    padding: 11
  },
  icon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  headerContainer: {
    flex: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  text: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-700",
    lineHeight: 18
  },
  buttonRow: {
    height: 46,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 5
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
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
    fontFamily: "roboto-regular",
    fontSize: 24,
    display: "none"
  }
});

export default withNavigation(Header);
