import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

const profileImg ="https://reactnativemaster.com/wp-content/uploads/2019/11/React-native-master-logo-only.png"

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Image style={styles.profileImg} source={{uri: profileImg}} />
            <Text style={{fontWeight:"bold",fontSize:18}}>React Native Master</Text>
          </View>
          <Text style={{color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida, metus eleifend vulputate fringilla, ligula odio vehicula tortor, ut iaculis nulla eros id turpis. </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems:"center"
  },
  card:{
    height:150,
    width:"80%",
    backgroundColor:"white",
    borderRadius:15,
    elevation:10,
    padding:10
  },
  profileImg:{
    width:30,
    height:30,
    borderRadius:50,
    marginRight:10,
  },
  header: {
    flexDirection:"row",
  }
});