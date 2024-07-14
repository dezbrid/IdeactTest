import React from 'react';
import {SafeAreaView, View} from 'react-native';

import styles from './styles';

export function Details(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer} />
    </SafeAreaView>
  );
}
