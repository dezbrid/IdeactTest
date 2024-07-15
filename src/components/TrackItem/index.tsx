import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TrackTop} from '@types';
import {handleAddTrackToList} from '@services';

import styles from './styles';
import Play from './assets/play.png';

type Props = {
  item: TrackTop;
  handleOnPressTrack: (id: string) => void;
};
export const TrackItem = ({item, handleOnPressTrack}: Props) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      key={item.mbid}
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
};
