import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button
} from "react-native";

import ModalComponent from "../components/Modal";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: [
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar1.png",
          description: "User 1"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar2.png",
          description: "User 2"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar3.png",
          description: "User 3"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar4.png",
          description: "User 4"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar5.png",
          description: "User 5"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar6.png",
          description: "User 6"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar1.png",
          description: "User 7"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar2.png",
          description: "User 8"
        },
        {
          icon: "https://bootdey.com/img/Content/avatar/avatar3.png",
          description: "User 9"
        }
      ]
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "83%",
          marginLeft: "17%",
          backgroundColor: "#CED0CE"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: "https://png.icons8.com/search/androidL/100/000000"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Type Search"
            underlineColorAndroid="transparent"
            onChangeText={name_address => this.setState({ name_address })}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.notificationList}
          data={this.state.data}
          renderItem={({ item }) => {
            return (
              <View style={styles.notificationBox}>
                <Image style={styles.image} source={{ uri: item.icon }} />

                <Text style={styles.name}>{item.description}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.description}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB"
  },
  formContent: {
    flexDirection: "row"
    // marginTop: 10
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderBottomWidth: 1,
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    flex: 1
    // margin: 10
  },
  icon: {
    width: 30,
    height: 30
  },
  iconBtnSearch: {
    alignSelf: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center"
  },
  notificationList: {
    // marginTop: 20,
    paddingTop: 10
  },
  notificationBox: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    // backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 10
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 10,
    alignSelf: "center"
  }
});
