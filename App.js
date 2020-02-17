import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import History from "./src/screens/History";
import Login from "./src/screens/Login";
import Main from "./src/screens/Main";
import Payment from "./src/screens/Payment";
import Register from "./src/screens/Register";
import Riding from "./src/screens/Riding";
import ScanScoo from "./src/screens/ScanScoo";
import Setting from "./src/screens/Setting";
import ContactUs from "./src/screens/ContactUs";
import PicAfterParking from "./src/screens/PicAfterParking";
import RideDetailSummary from "./src/screens/RideDetailSummary";

const DrawerNavigation = createDrawerNavigator({
  Login: Login, // OK EXCL(SIGN_WITH_APPLE & WHATSAPP_PHONE_VERIFY)
  Main: Main, // OK EXCL(VisibilityOfDetail)
  History: History, // OK  
  Payment: Payment, // NOK
  Register: Register, // OK EXCL(ChangeFields & DatePickerCannotInput)
  Riding: Riding, // NOK
  ScanScoo: ScanScoo, // OK EXCL(SCAN_QR & FIND_SCOO & START_RIDING)
  Setting: Setting, // OK EXCL(SAVE & LOG_OUT & TERMS)
  ContactUs: ContactUs, // NOK
  PicAfterParking: PicAfterParking, // NOK
  RideDetailSummary: RideDetailSummary // OK EXCL(MAPS_ROUTE & FEEDBACK)
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Main: Main,
    History: History,
    Login: Login,    
    Payment: Payment,
    Register: Register,
    Riding: Riding,
    ScanScoo: ScanScoo,
    Setting: Setting,
    ContactUs: ContactUs,
    PicAfterParking: PicAfterParking,
    RideDetailSummary: RideDetailSummary
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete, userId] = useState(false);  
  this.state = {
    host: 'http://localhost:8080',
    registerUserApi: '/user/register', // OK
    startRidingApi: '/riding/start', // OK
    ridingHistoryApi: '/riding/history', // OK
    canLoginApi: '/user/canLogin', // OK
    feedbackApi: '/user/feedback',
    addScooterApi: '/scooter/add', // ADMIN
    getScooterApi: '/scooter/get',
    getClosestScootersApi: '/scooter/getClosestScooters', // OK
    addPictureApi: '/riding/addPicture',
    finishRidingApi: '/riding/finish',
    ridingDetail: '/riding/detail',
    startRidingApi: '/riding/start',
    problemReportApi: '/problem/report',
    userId: '1',
    history: [],
    user: {},
    firstName: "ibrahim",
    lastName: "Akay",
    email: "email",
    birthDate: "1987-09-27",
    requestJson: 'json',
    requestUrl: 'x-www-form-urlencoded'
  }
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}        
      />
    );
  } else {        
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;    
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
