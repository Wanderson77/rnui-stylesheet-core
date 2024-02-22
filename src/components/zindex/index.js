import React from "react";
import { StyleSheet, View } from "react-native";

export default function ZIndexExample() {
  return (
    <View style={styles.root}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: '#e1e4e8',
          },
        ]}>
        {/* zIndex: 0 */}
        <View style={[styles.item, { backgroundColor: '#6638f0' }]} />
        {/* zIndex: 1 */}
        <View style={[styles.item, { backgroundColor: '#5cc9f5' }]} />
        {/* zIndex: 2 */}
        <View style={[styles.item, { backgroundColor: '#4af2a1' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  container: {
    height: 200,
    width: 200,
    borderRadius: 16,
    padding: 16,
    borderWidth: 8,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  item: {
    borderWidth: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 48,
    width: 48,
    borderRadius: 8,
  },
});