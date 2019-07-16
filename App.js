import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image
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
        <Image
          source={{
            uri:
              "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5aa19c12-99f7-4454-a06b-b8a1acbfc91a/d55w1wu-8127e9d2-1c25-40db-ab1f-ac50a121a1f5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhYTE5YzEyLTk5ZjctNDQ1NC1hMDZiLWI4YTFhY2JmYzkxYVwvZDU1dzF3dS04MTI3ZTlkMi0xYzI1LTQwZGItYWIxZi1hYzUwYTEyMWExZjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zna9sgfXl9ppwreSLCBOebVx2tPSSIkHoikGMgq6n0o"
          }}
          style={{ width: 200, height: 200, marginBottom: 25 }}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.textStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.textStyle}>Sign Up</Text>
        </TouchableOpacity>
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
        headerLeft: (
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingLeft: 15 }}>
            {/* Left */}
          </Text>
        ),
        headerRight: (
          <Text
            style={{
              fontSize: 22,
              color: "#ccc",
              fontWeight: "bold",
              paddingRight: 15
            }}
          >
            +
          </Text>
        ),
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
  },
  buttonStyle: {
    // flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderColor: "#007aff",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 16,
    color: "#007aff",
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default App;
