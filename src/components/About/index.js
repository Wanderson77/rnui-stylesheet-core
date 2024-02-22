import React from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import Styles from './styles';

const About = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Hello!</Text>
      <Text>I am a Text in side View</Text>
      <Text
        style={{
          color: 'green',
          fontSize: 18
        }}>
          Who you are ?
      </Text>
    </View>
  );
};

export default About;