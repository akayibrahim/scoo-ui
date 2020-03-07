import { StyleSheet } from "react-native";

  const baseStyles = {
    header: {
      width: '100%',
      height: '7%',
      marginTop: 20
    },
    mapView: {
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      position: "absolute"
    },
    mapViewStack: {
      width: '100%',
      height: '100%'
    },
    mapViewStackRow: {
      height: '90%',
      flexDirection: "row",
      marginRight: 0
    },
    settingTextInput: {
      flex: 1,
      color: "white",
      alignSelf: "center",
      marginLeft: 10,
      paddingLeft: 5,
      fontSize: 16,
      fontFamily: "roboto-regular",
      lineHeight: 19
    }
  }

  export default function createStyles(overrides = {}) {
    return StyleSheet.create({...baseStyles, ...overrides})
  }