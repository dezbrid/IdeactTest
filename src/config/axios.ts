import axios from 'axios';

export const axiosAudiosScrobbler = axios.create({
  baseURL: 'http://ws.audioscrobbler.com/2.0/',
});
