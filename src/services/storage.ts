import AsyncStorage from '@react-native-async-storage/async-storage';
import {TrackTop} from '@types';

const storeData = async (value: TrackTop[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('top10', jsonValue);
  } catch (e) {}
};
export const getDataStorage = async (): Promise<TrackTop[] | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('top10');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

export const handleAddTrackToList = async (track: TrackTop) => {
  const {mbid} = track;
  const currentStore = await getDataStorage();
  if (currentStore) {
    const newList = [track, ...currentStore.filter(t => t.mbid !== mbid)];
    if (newList.length > 10) {
      storeData(newList.slice(0, -1));
    } else {
      storeData(newList);
    }
  } else {
    storeData([track]);
  }
};
