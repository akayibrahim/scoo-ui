import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View, StatusBar } from "react-native";
import Header from "../components/Header";
import RideHistory from "../components/RideHistory";
import NoRideHistory from "../components/NoRideHistory";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function History(props) {
  const headerText = "HISTORY";  
  const [data, setData] = useState({isFetching: false});
  const day = "TODAY, 16:22";
  const time = "8 DK";
  const price = "6 TL";
  const distance = "2 KM";  
  
  useEffect(() => {
    const ridingHistory = async () => {
      await fetch(this.state.host + this.state.ridingHistoryApi, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'credentials': "omit",
          },            
          body: "userId=" + this.state.userId
        })
        .then((response) => {
          if (response.status == 400) {
            Alert.alert(response);
            return;
          }      
          return response.json();  
         })
        .then((responseJson) => {
          this.state = { history: responseJson };      
          setData({history: responseJson, isFetching: true});
          // console.log(responseJson);
        })
        .catch((error) => {      
          console.error(error);
        });
    }
    ridingHistory();
  }, []);

  return (    
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} style={baseStyles.header}></Header>
      <RideHistory style={styles.rideHistory} day={day} time={time} price={price} distance={distance}></RideHistory>
      { 
        this.state.history == null ? <NoRideHistory style={styles.noRideHistory}></NoRideHistory> :
        this.state.history.map((hist, i) => <RideHistory key={i} style={styles.rideHistory} day={hist.startDateTime} time={hist.totalTime} price={hist.totalPrice} distance={hist.totalDistance}></RideHistory>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(15,15,15,1)"
  },
  rideHistory: {
    width: '100%',
    height: 82
  },
  noRideHistory: {
    width: '100%',
    height: 82
  }
});

export default History;