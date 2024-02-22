import React, { Component } from "react";
import { Text, View, LogBox } from "react-native";

import styles from './styles';

LogBox.ignoreAllLogs();
export default class Logbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Your Code will be here */}
        <Text>Mobile First !!!!</Text>
      </View>
    );
  }
}
