import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { withNavigation } from 'react-navigation';

function ScooCodeButton(props) {
  return (    
    <View style={[styles.button, props.style]}>
      <Text style={styles.text}>ABC1</Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#212121",
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
      shadowRadius: 5
    },
    text: {
      color: "#fff",
      fontSize: 14,
      fontFamily: "roboto-regular"
    }
  });

export default withNavigation(ScooCodeButton);
