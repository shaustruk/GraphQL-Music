export interface ITrack {
  _id: string;
  id?: string;
  title: string;
  albumId: string;
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

export interface ITracks {
  tracks: [ITrack];
}

export interface ITrackRes {
  title: string;
  albums: string[];
  bands: string[];
  duration: number;
  released: number;
  genres: string[];
}
