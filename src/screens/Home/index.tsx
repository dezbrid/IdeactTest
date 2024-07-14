import React from 'react';
import {SafeAreaView, Text, FlatList, ListRenderItem} from 'react-native';

import styles from './styles';

export function Home() {
  const renderItem: ListRenderItem<any> = ({}) => <Text>hola</Text>;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1, 2]}
        renderItem={renderItem}
        style={styles.listContainer}
      />
    </SafeAreaView>
  );
}
