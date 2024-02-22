import React from 'react';
import {View} from 'react-native';

const PercentageEx = () => {
  // Try removing the `height: '100%'` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
    <View style={{height: '90%'}}>
      <View
        style={{
          height: '35%',
          backgroundColor: 'powderblue',
        }}
      />
      <View
        style={{
          width: '99%',
          height: '25%',
          backgroundColor: 'orange',
        }}
      />
      <View
        style={{
          width: '33%',
          height: '44%',
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};

export default PercentageEx;