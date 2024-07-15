import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import {DetailProps, TrackInfo} from '@types';
import {getInfoTracks} from '@services';
import {find_tag_regex} from '@constants';

export function Details({route}: DetailProps): JSX.Element {
  const idTrack = route.params.id;
  const [trackInfo, setTrackInfo] = useState<TrackInfo>();

  const handleGetInfotrack = async (id: string): Promise<void> => {
    try {
      const response = await getInfoTracks(id);
      setTrackInfo(response.track);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    handleGetInfotrack(idTrack);
  }, [idTrack]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FastImage
          style={styles.imagen}
          source={{
            uri: `${trackInfo?.album.image[2]['#text']}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.textName}>{trackInfo?.name}</Text>
        <Text style={styles.textArtistName}>{trackInfo?.artist.name}</Text>
        <Text style={styles.textSumary}>
          {' '}
          {trackInfo?.wiki.summary.replace(find_tag_regex, '')}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
