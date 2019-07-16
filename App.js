import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  StatusBar
} from "react-native";

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class App extends Component {
  render() {
    return (
      <>
        <StatusBar
          hidden={false}
          backgroundColor="#00c6fb"
          barStyle="light-content"
        />
        <AppContainer />
      </>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

class Phones extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Phones</Text>
      </View>
    );
  }
}
class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const HomeTabNavigator = createBottomTabNavigator(
  {
    Phones,
    Contacts
  },
  {
    tabBarOptions: {
      showLabel: true,
      style: {
        backgroundColor: "rgba(0,0,0,0.8)",
        paddingBottom: 15
      }
    },
    allowFontScaling: false,
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeTabNavigator
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        // headerLeft: (
        //   <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 15 }}>
        //     Left
        //   </Text>
        // ),
        // headerRight: (
        //   <Text style={{ fontSize: 18, fontWeight: "bold", paddingRight: 15 }}>
        //     Right
        //   </Text>
        // ),
        headerTitleStyle: {
          flex: 1,
          textAlign: "center",
          fontSize: 14
        },
        headerStyle: {
          height: 40,
          backgroundColor: "#00c6fb"
        }
      };
    }
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Home: {
    screen: AppStackNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default App;
