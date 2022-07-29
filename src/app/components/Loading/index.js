import React, { memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../Photo/styles';

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator animating size="small" color="#FFFF00" />
  </View>
);

export default memo(Loading);
