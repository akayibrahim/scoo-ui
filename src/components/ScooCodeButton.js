import React, { Component } from "react";
import { AsyncStorage, Alert, StyleSheet, TouchableOpacity, Text } from "react-native";
import { withNavigation } from 'react-navigation';

function ScooCodeButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]}  
      onPress={() => Alert.alert(
        'Scoo Locker Password',
        '1234',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
          {text: 'OK', onPress: () => {
            AsyncStorage.setItem('ridingStarted', 'true')
            .then(() => {
              AsyncStorage.setItem('ridingStartTime', JSON.stringify(new Date()));
              console.log("Riding started!");
              props.navigation.navigate('Riding');
            })
            .catch((error) => {
              console.log(error);
            });
          }},
    
        ],
        { cancelable: false }
      )}>
      <Text style={styles.text}>ABC1</Text>
    </TouchableOpacity>
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
