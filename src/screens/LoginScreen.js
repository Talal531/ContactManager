import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  ActivityIndicator
} from "react-native";

import { connect } from "react-redux";

import { loginAction } from "../actions/AuthAction";

const SHOW_ICON =
  "https://img.icons8.com/material-outlined/24/000000/visible.png";
const HIDE_ICON = "https://img.icons8.com/material-outlined/24/000000/hide.png";
const EMAIL_ICON = "https://img.icons8.com/nolan/40/000000/email.png";
const KEY_ICON = "https://img.icons8.com/nolan/40/000000/key.png";
const BG_IMAGE = "https://picsum.photos/id/113/4168/2464";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      icon: HIDE_ICON,
      securePassword: true
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  _onChangeIcon = () => {
    this.setState(prevState => ({
      icon: prevState.icon == SHOW_ICON ? HIDE_ICON : SHOW_ICON,
      securePassword: !prevState.securePassword
    }));
  };

  onHandleLogin = () => {
    const { email, password } = this.state;
    this.props.loginUser({ email, password });
  };

  onHandleRegister = () => {
    const { email, password } = this.state;
  };

  render() {
    const {
      container,
      bgImage,
      inputContainer,
      inputs,
      inputIcon,
      buttonContainer,
      btnText,
      loginButton,
      loginText,
      mainText
    } = styles;

    const { icon, securePassword } = this.state;
    const { auth } = this.props;
    console.log("render");

    return (
      <View style={container}>
        <Image style={bgImage} source={{ uri: BG_IMAGE }} />
        <View
          style={{
            width: "80%",
            marginBottom: 30,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <Text style={mainText}>TEXHOLAB</Text>
        </View>
        <View style={inputContainer}>
          <Image
            style={inputIcon}
            source={{
              uri: EMAIL_ICON
            }}
          />
          <TextInput
            style={inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={inputContainer}>
          <Image
            style={inputIcon}
            source={{
              uri: KEY_ICON
            }}
          />
          <TextInput
            style={inputs}
            placeholder="Password"
            secureTextEntry={securePassword}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
          <TouchableWithoutFeedback onPress={() => this._onChangeIcon()}>
            <Image
              style={[
                inputIcon,
                (style = { marginRight: 15, width: 15, height: 15 })
              ]}
              source={{
                uri: icon
              }}
            />
          </TouchableWithoutFeedback>
        </View>

        <TouchableOpacity
          style={[buttonContainer, loginButton]}
          onPress={() => this.onHandleLogin()}
        >
          <Text style={loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={buttonContainer}
          onPress={() => this.onHandleRegister()}
        >
          <Text style={btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: ({ email, password }) =>
      dispatch(loginAction({ email, password }))
  };
};

const mapStateToProps = state => {
  console.log("map", state.auth);
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

const resizeMode = "cover";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DCDCDC"
  },
  mainText: {
    textAlign: "center",
    fontSize: 34,
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "monospace",
    fontWeight: "bold",
    letterSpacing: 5
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderBottomWidth: 1,
    width: "80%",
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#fff",
    backgroundColor: "transparent"
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    borderWidth: 0,

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19
  },
  loginText: {
    color: "#fff"
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
