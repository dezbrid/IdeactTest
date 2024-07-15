import {ResponseGeoTopTrack} from '@types';
import {axiosAudiosScrobbler} from '@config/axios';
import {AxiosResponse} from 'axios';

const API_KEY = 'c19c47264b0dfd0973d63aa54cb6788c';
const COUNTRY = 'colombia';

type GetTopTracks = (page: number) => Promise<ResponseGeoTopTrack>;
export const getTopTracks: GetTopTracks = async page => {
  try {
    const response: AxiosResponse<ResponseGeoTopTrack, any> =
      await axiosAudiosScrobbler.get(
        `?method=geo.gettoptracks&country=${COUNTRY}&api_key=${API_KEY}&format=json&page=${page}`,
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
