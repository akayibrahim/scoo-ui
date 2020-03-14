import React, { useEffect, useState } from "react";
import { AsyncStorage, StyleSheet, View, ScrollView, StatusBar } from "react-native";
import Header from "../components/Header";
import RideHistory from "../components/RideHistory";
import NoRideHistory from "../components/NoRideHistory";
import BaseCss from '../styles/BaseCss.js';
const baseStyles = BaseCss()

function History(props) {
  const headerText = "HISTORY";  
  const [data, setData] = useState([]);
  const day = "TODAY, 16:22";
  const time = "8 DK";
  const price = "6 TL";
  const distance = "2 KM";    
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const ridingHistory = async () => {
      const request = "userId=" + userInfo.id;
      await fetchUtil('/riding/history', request, 'url')          
      .then((response) => { 
        setData(response);
      })
      .catch((error) => { console.error(error); });
    };
    const getUserInfo = async () => {
      await AsyncStorage.getItem('userInfo')
      .then((response) => {
        if (response == null) {
          props.navigation.navigate('Login');
        } else {
          setUserInfo(JSON.parse(response));
          ridingHistory();
        }
      })
      .catch((error) => {
        console.log(error);
        props.navigation.navigate('Login');
      });
    };
    getUserInfo();
  }, []);

  return (    
    <View style={styles.rect}>
      <StatusBar barStyle="light-content"></StatusBar>
      <Header headerText={headerText} isBack={true} backScreen={'Main'} style={baseStyles.header}></Header>
      <ScrollView>
        <RideHistory style={styles.rideHistory} day={day} time={time} price={price} distance={distance}></RideHistory>
        { 
          data == null ? <NoRideHistory style={styles.noRideHistory}></NoRideHistory> :
          data.map((hist, i) => <RideHistory key={i} style={styles.rideHistory} day={hist.startDateTime} time={hist.totalTime} price={hist.totalPrice} distance={hist.totalDistance}></RideHistory>)
        }
      </ScrollView>      
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