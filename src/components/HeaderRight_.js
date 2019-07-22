import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import ModalComponent from "./Modal";

export default class HeaderRight_ extends Component {
  state = {
    modalVisible: false
  };
  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View>
        <TouchableWithoutFeedback onPress={() => this.openModal()}>
          <Text>NEW</Text>
        </TouchableWithoutFeedback>
        <ModalComponent
          modalVisible={this.state.modalVisible}
          closeModal={() => this.closeModal()}
        />
      </View>
    );
  }
}
