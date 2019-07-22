import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";

const BLUE = "#428AF8";
const LIGHT_GRAY = "#D3D3D3";

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  handleFocus = event => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  handleBlur = event => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const { isFocused } = this.state;
    const { onFocus, onBlur, ...otherProps } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          visible={this.props.modalVisible}
          animationType={"slide"}
          onRequestClose={this.props.closeModal}
        >
          <View style={styles.modalContainer}>
            {/* header */}
            <View style={styles.header}>
              <View>
                <TouchableWithoutFeedback onPress={this.props.closeModal}>
                  <Text style={[styles.textColor, (style = { color: "red" })]}>
                    Cancel
                  </Text>
                </TouchableWithoutFeedback>
              </View>

              <View>
                <Text style={styles.textColor}>New Contact</Text>
              </View>

              <View>
                <TouchableWithoutFeedback>
                  <Text style={[styles.textColor, (style = { color: "blue" })]}>
                    Save
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
            {/* header end */}

            {/* Details */}
            <View style={styles.details}>
              <View style={styles.UserImage}>
                <Text style={{ textAlign: "center" }}>Profile Picture</Text>
              </View>
              <View style={styles.name}>
                <View style={styles.givenName}>
                  <TextInput
                    placeholder="Given Name"
                    selectionColor={BLUE}
                    underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={{ height: 40 }}
                    {...otherProps}
                  />
                </View>
                <View style={styles.familyName}>
                  <TextInput
                    placeholder="Family Name"
                    selectionColor={BLUE}
                    underlineColorAndroid={isFocused ? BLUE : LIGHT_GRAY}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    style={{ height: 40 }}
                    {...otherProps}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  modalContainer: {
    flex: 1
  },
  header: {
    width: "100%",
    height: 40,
    padding: 10,
    backgroundColor: "#F8F8F8",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textColor: {},
  details: {
    padding: 10,
    flexDirection: "row"
  },
  UserImage: {
    // backgroundColor: "powderblue",
    width: "22%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 100,
    borderColor: LIGHT_GRAY,
    marginRight: 10
  },
  name: {
    // backgroundColor: "skyblue",
    width: "78%"
  }
});
