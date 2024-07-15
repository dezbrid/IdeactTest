type Streamable = {
  '#text': string;
  fulltrack: string;
};

type Artist = {
  name: string;
  mbid: string;
  url: string;
};

type Image = {
  '#text': string;
  size: string;
};

type Attr = {
  rank: string;
};

export type Track = {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
  '@attr': Attr;
};

type TracksAttr = {
  country: string;
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

type Tracks = {
  track: Track[];
  '@attr': TracksAttr;
};

export type ResponseGeoTopTrack = {
  tracks: Tracks;
};
