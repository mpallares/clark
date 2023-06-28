import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors } from '../../constants/colors';

export const Spinner = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator
      testID='activity-indicator'
      size='large'
      color={Colors.CLARK_BLUE_PRIMARY}
    />
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
