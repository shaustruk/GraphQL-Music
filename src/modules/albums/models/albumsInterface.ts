export interface IAlbum {
  _id: string;
  id?: string;
  name: string;
  released: number;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
  image: string;
}

export interface IAlbums {
  albums: [IAlbum];
}
