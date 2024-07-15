import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import styles from './styles';
import {getDataStorage, handleAddTrackToList} from '@services';
import {ProfileScreenProps, TrackTop} from '@types';
import {TrackItem} from '@components';

type ListKeyExtractor = (item: TrackTop, index: number) => string;
export function Profile({navigation}: ProfileScreenProps): JSX.Element {
  const [tracks, setTracks] = useState<TrackTop[]>([]);
  const handleOnPressTrack = (id: string) => {
    navigation.navigate('Details', {id});
  };
  const getStorage = async () => {
    const storage = await getDataStorage();
    setTracks(storage || []);
  };
  const handlePLay = async (item: TrackTop) => {
    await handleAddTrackToList(item);
    getStorage();
  };
  useFocusEffect(
    useCallback(() => {
      getStorage();
    }, []),
  );

  const listFooterComponent = () => <View style={styles.footer} />;
  const separatorView = () => <View style={styles.separator} />;
  const keyExtractor: ListKeyExtractor = (item, index) => item.mbid + index;
  const listHeaderComponent = () => (
    <View style={styles.headerComponent}>
      <Text style={styles.textTitle}>Mi perfil</Text>
      <Text style={styles.textSubTitle}>Últimas canciones reproducidas</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList<TrackTop>
        data={tracks}
        extraData={tracks}
        renderItem={({item}) => (
          <TrackItem
            item={item}
            handleOnPressTrack={handleOnPressTrack}
            handlePlay={handlePLay}
          />
        )}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
        ItemSeparatorComponent={separatorView}
        ListFooterComponent={listFooterComponent}
        ListHeaderComponent={listHeaderComponent}
      />
    </SafeAreaView>
  );
}
