import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  TouchableWithoutFeedback
} from "react-native";

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
import reducers from "./src/reducers";
import LoginComponent from "./src/screens/LoginScreen";
import Home from "./src/screens/Home";
import HeaderRight_ from "./src/components/HeaderRight_";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const firebaseConfig = {
  apiKey: "api key",
  authDomain: "auth domain",
  databaseURL: "db url",
  projectId: "project id",
  storageBucket: "storage bucket id",
  messagingSenderId: "senderid",
  appId: "app id"
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

const Phone = () => {
  return <Text>Phones</Text>;
};

const HomeTabNavigator = createBottomTabNavigator(
  {
    Contacts: {
      screen: Home,
      navigationOptions: {
        title: "Contacts"
      }
    },
    Phone: {
      screen: Phone
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "black",
        paddingBottom: 12
      },
      allowFontScaling: false,
      keyboardHidesTabBar: true,
      labelStyle: {
        fontSize: 12
      }
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      let headerRight_ = "";
      if (routeName === "Contacts") {
        headerRight_ = <HeaderRight_ />;
      }
      return {
        headerTitle: routeName,
        headerRight: headerRight_,
        headerRightContainerStyle: {
          paddingRight: 15,
          fontSize: 22
        },
        headerStyle: {
          height: 40
        },
        headerTitleStyle: {
          fontSize: 16
        }
      };
    }
  }
);

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: HomeTabNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: LoginComponent
    },
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
