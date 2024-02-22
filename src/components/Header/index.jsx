import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text> Voltar </Text>
          <Text> Meu App </Text>
          <Text> Perfil </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#CCC',
  },

  header: {
    height: 60,
    backgroundColor: '#FFF',    
  },

});
