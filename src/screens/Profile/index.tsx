import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';
import {getDataStorage} from '@services';

export function Profile(): JSX.Element {
  useFocusEffect(
    useCallback(() => {
      const getStorage = async () => {
        const storage = await getDataStorage();
        console.log('storage', storage);
      };
      getStorage();
    }, []),
  );

  return <SafeAreaView style={styles.container} />;
}
