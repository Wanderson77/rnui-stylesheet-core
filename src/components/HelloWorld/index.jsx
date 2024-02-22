import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, world!</Text>
      <Text style={[styles.title, styles.red]}>From React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  red: {
    fontSize: 32,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default index
