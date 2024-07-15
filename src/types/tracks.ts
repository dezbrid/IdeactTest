type TrackImage = {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge';
};

type TrackStreamable = {
  '#text': string;
  fulltrack: string;
};

type TrackArtist = {
  name: string;
  mbid: string;
  url: string;
};
type Attr = {
  rank: string;
};

type TrackBase = {
  name: string;
  duration: string;
  mbid: string;
  url: string;
  streamable: TrackStreamable;
  listeners: string;
  artist: TrackArtist;
};

type TracksAttr = {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

type Tracks = {
  track: TrackTop[];
  '@attr': TracksAttr;
};

type TrackAlbum = {
  artist: string;
  title: string;
  mbid: string;
  url: string;
  image: TrackImage[];
  '@attr': {
    position: string;
  };
};

type TrackTag = {
  name: string;
  url: string;
};

type TrackTopTags = {
  tag: TrackTag[];
};

type TrackWiki = {
  published: string;
  summary: string;
  content: string;
};

export type TrackTop = TrackBase & {
  image: TrackImage[];
  '@attr': Attr;
};

export type TrackInfo = TrackBase & {
  playcount: string;
  album: TrackAlbum;
  toptags: TrackTopTags;
  wiki: TrackWiki;
};

export type ResponseTrackInfo = {
  track: TrackInfo;
};
export type ResponseGeoTopTrack = {
  tracks: Tracks;
};
