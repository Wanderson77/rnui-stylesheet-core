/*This is an Example to Load Different CSS Style in React Native on View Component */

import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default class OldStyleExemplo extends Component {

  constructor() {
    super();
    this.state = {
      isOldStyle: true,
    };
  }

  ChangeNewStyle = () => {
    this.setState({
      isOldStyle: false,
    });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text
          //Here we are setting the style on the basis of state
          style={this.state.isOldStyle === true ? styles.stylOld : styles.styleNew}>
          About React
        </Text>
        <Button
          title="Change CSS Style"
          onPress={this.ChangeNewStyle}
          color="#606070"
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({

  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },

  stylOld: {
    fontSize:30,
    color:'red'
  },

  styleNew: {
    fontSize:60,
    color:'red'
  },

});