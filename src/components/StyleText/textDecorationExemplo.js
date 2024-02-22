/*This is an example of React Native underLine Text*/
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TextDecorationExemplo extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>Example of Underline Text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },

  TextStyle: {
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
    //line-through is the trick
  },

});