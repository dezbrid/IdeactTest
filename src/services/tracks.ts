import {ResponseGeoTopTrack, ResponseTrackInfo} from '@types';
import {axiosAudiosScrobbler} from '@config/axios';
import {AxiosResponse} from 'axios';

const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c';
const COUNTRY = 'colombia';
const API_URL = 'api_key=' + API_KEY;
type GetTopTracks = (page: number) => Promise<ResponseGeoTopTrack>;
export const getTopTracks: GetTopTracks = async page => {
  try {
    const response: AxiosResponse<ResponseGeoTopTrack, any> =
      await axiosAudiosScrobbler.get(
        `?method=geo.gettoptracks&country=${COUNTRY}&${API_URL}&format=json&page=${page}`,
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};

type GetInfoTracks = (id: string) => Promise<ResponseTrackInfo>;
export const getInfoTracks: GetInfoTracks = async id => {
  try {
    const response: AxiosResponse<ResponseTrackInfo, any> =
      await axiosAudiosScrobbler.get(
        `?method=track.getInfo&${API_URL}&format=json&mbid=${id}`,
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
