import React, { Component } from "react";
import { Linking, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { withNavigation } from 'react-navigation';

function Header(props) {  
  const {headerText, isBack, backScreen} = props;
  return (
    <View style={[styles.rect, props.style]}>
      <View style={styles.menuRow}>
        {isBack == true ?
          <TouchableOpacity style={styles.menuIcon} onPress={() => props.navigation.navigate(backScreen)}>
            <IoniconsIcon name="md-arrow-back" style={styles.leftIcon}></IoniconsIcon>
          </TouchableOpacity>
        : 
          <TouchableOpacity style={styles.menuIcon} onPress={() => props.navigation.openDrawer()}>          
            <IoniconsIcon name="md-menu" style={styles.leftIcon}></IoniconsIcon>
          </TouchableOpacity>          
        }
        
      </View>
      <View style={styles.headerContainer}>
          <Text numberOfLines={1} style={styles.text}>
            {headerText}
          </Text>
      </View>
      <View style={styles.buttonRowFiller}></View>
      <TouchableOpacity style={styles.wpButton} onPress={() => Linking.openURL('https://wa.me/905377885933')}>
        <MaterialCommunityIconsIcon
          name="whatsapp"
          style={styles.wpIcon}
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
  menuIcon: {
    marginTop: 9
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  headerContainer: {
    flex: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 9
  },
  text: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "roboto-700",
    lineHeight: 20
  },
  menuRow: {
    height: 46,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 9
  },
  buttonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  wpButton: {
    alignItems: "center",
    marginTop: 9,
    marginRight: 5
  },
  wpIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  }
});

export default withNavigation(Header);
