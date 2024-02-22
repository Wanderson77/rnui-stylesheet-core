/*This is an example of React Native Strikethrough Text*/

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class LineThroughExemplo extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>
          Example of Strike through Text
        </Text>
      </View>
    );
  }

}


const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  TextStyle: {
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'line-through',
    //line-through is the trick
  },

});