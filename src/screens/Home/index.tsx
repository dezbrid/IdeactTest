import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {getTopTracks, handleAddTrackToList} from '@services';
import {HomeProps, TrackTop} from '@types';

import styles from './styles';
import Play from './assets/play.png';
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

  const renderItem: ListRenderItem<TrackTop> = ({item, index}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      key={index}
      onPress={() => handleOnPressTrack(item.mbid)}>
      <FastImage
        style={styles.imagen}
        source={{
          uri: `${item.image[1]['#text']}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={styles.itemSubContainer}>
        <Text style={styles.textName}>{item.name}</Text>
        <Text style={styles.textArtistName}>{item.artist.name}</Text>
      </View>
      <TouchableOpacity
        style={styles.playContainer}
        onPress={() => handleAddTrackToList(item)}>
        <Image source={Play} resizeMode="contain" style={styles.playIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList<TrackTop>
        data={tracks}
        extraData={tracks}
        renderItem={renderItem}
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
