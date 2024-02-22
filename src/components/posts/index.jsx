import { StatusBar } from 'expo-status-bar';

import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const imageUrl = 'https://image.freepik.com/free-vector/mars-landscape-alien-planet-martian-background_107791-1781.jpg'
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: imageUrl}} 
        style={styles.image}
      />
      <Text style={styles.h1}>Heading 1</Text>
      <Text style={styles.h2}>Heading 2</Text>
      <Text style={styles.h3}>Heading 3</Text>
      <Text style={styles.h4}>Heading 4</Text>
      <Text style={styles.h5}>Heading 5</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dolor nunc, <Text style={styles.visitedlinkText}>vestibulum ut lectus lacinia</Text>, luctus tempor arcu. Pellentesque lacus est, ultrices in dapibus vel, eleifend et quam. <Text style={styles.highlightedText}>Praesent tincidunt consequat pretium</Text>. Etiam accumsan mollis tortor, a sodales augue laoreet quis. Pellentesque efficitur varius est non aliquam. <Text style={styles.linkText}>Praesent vel volutpat elit</Text>.
      </Text>
      <TouchableOpacity style={styles.readMoreBtn}>
        <Text style={styles.readMoreBtnTxt}>Read More</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '80%',
    height: '20%',
    borderRadius: 20
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 20
  },
  h2: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 15
  },
  h3: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 15
  },
  h4: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10
  },
  h5: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  },
  paragraph: {
    padding:10
  },
  highlightedText: {
    fontWeight: "bold",
    backgroundColor: "yellow",
  },
  linkText: {
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  visitedlinkText: {
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "purple"
  },
  readMoreBtn: {
    marginTop:20,
    backgroundColor:"#f37121",
    padding: 10,
    borderRadius: 20,
    width: "50%",
    alignItems: "center"
  },
  readMoreBtnTxt: {
    color:"white",
    textTransform: "uppercase",
    fontSize: 15
  }
});
