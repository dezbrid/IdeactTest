import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {TrackItem} from '@components';
import {getTopTracks, handleAddTrackToList} from '@services';
import {HomeProps, TrackTop} from '@types';

import styles from './styles';
type ListKeyExtractor = (item: TrackTop, index: number) => string;
export function Home({navigation}: HomeProps) {
  const [tracks, setTracks] = useState<TrackTop[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const handleOnPressTrack = (id: string) => {
    navigation.navigate('Details', {id});
  };
  const handleGetToptrack = async (page: number = 1): Promise<void> => {
    try {
      setLoading(true);
      const response = await getTopTracks(page);
      if (page === 1) {
        setTracks(response.tracks.track);
      } else {
        setTracks(t => [...t, ...response.tracks.track]);
      }
      setCurrentPage(prevPage => prevPage + 1);
      setTotalPage(Number(response.tracks['@attr'].totalPages));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const handleEndReached = () => {
    if (currentPage < totalPage) {
      handleGetToptrack(currentPage);
    }
  };
  useEffect(() => {
    handleGetToptrack();
  }, []);

  const listFooterComponent = () => <View style={styles.footer} />;
  const separatorView = () => <View style={styles.separator} />;
  const keyExtractor: ListKeyExtractor = (item, index) => item.mbid + index;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<TrackTop>
        data={tracks}
        extraData={tracks}
        renderItem={({item}) => (
          <TrackItem
            item={item}
            handleOnPressTrack={handleOnPressTrack}
            handlePlay={handleAddTrackToList}
          />
        )}
        keyExtractor={keyExtractor}
        style={styles.listContainer}
        ItemSeparatorComponent={separatorView}
        ListFooterComponent={listFooterComponent}
        ListHeaderComponent={separatorView}
        refreshing={loading}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
}
