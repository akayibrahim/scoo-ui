import React, { Component, useState } from "react";
import { TouchableHighlight, StyleSheet, View, TextInput } from "react-native";
import DatePicker from 'react-native-datepicker'
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function BirdthDateEnter(props) {  
  return (
    <View style={[styles.rect, props.style]}>
      <TextInput style={baseStyles.settingTextInput} value={this.state.birthDate}></TextInput>
      <DatePicker mode={'date'} format="YYYY-MM-DD" minDate="1950-01-01" maxDate="2100-01-01" confirmBtnText="Confirm" 
        cancelBtnText="Cancel" hideText={true} onDateChange={(date) => this.state = {birthDate: date}}/>
    </View>
  );      
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D9D5DC",
    borderBottomWidth: 1
  },
  textInput: {
    flex: 1,
    alignSelf: "stretch",
    marginBottom: 10,
    marginLeft: 10,
    paddingTop: 16,
    paddingRight: 5,
    paddingBottom: 8
  }
});

export default BirdthDateEnter;
