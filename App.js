import React, { useState } from "react";
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
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
import PicAfterParking from "./src/screens/PicAfterParking";
import RideDetailSummary from "./src/screens/RideDetailSummary";

const DrawerNavigation = createDrawerNavigator({  
  // Login: Login, // OK
  // Register: Register, // OK EXCL(ChangeFields & DatePickerCannotInput)
  Main: {screen: Main, navigationOptions: {
    drawerLabel: "Home"
  }}, // OK EXCL(VisibilityOfDetail & Distance)
  // ScanScoo: ScanScoo, // OK
  // Riding: Riding, // OK
  // PicAfterParking: PicAfterParking, // OK EXCL(AddPictureToServer)
  Payment: Payment, // NOK
  History: History, // OK
  // RideDetailSummary: RideDetailSummary, // OK EXCL(Feedback)
  Setting: Setting, // OK EXCL(Terms)
  // ContactUs: ContactUs // OK
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
    PicAfterParking: PicAfterParking,
    RideDetailSummary: RideDetailSummary
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
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
