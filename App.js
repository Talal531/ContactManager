import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";

import NavigationService from "./NavigationService";
import LoginComponent from "./src/screens/LoginScreen";
import reducers from "./src/reducers";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const firebaseConfig = {
  apiKey: "AIzaSyAQW0Mz0R-DItR6DHh0ZArGTPsiWScO7wQ",
  authDomain: "socailapp-1fabf.firebaseapp.com",
  databaseURL: "https://socailapp-1fabf.firebaseio.com",
  projectId: "socailapp-1fabf",
  storageBucket: "socailapp-1fabf.appspot.com",
  messagingSenderId: "694843590363",
  appId: "1:694843590363:web:791c697984abc428"
};
firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Login: {
    screen: LoginComponent
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
