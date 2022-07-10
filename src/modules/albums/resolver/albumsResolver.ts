import { IAlbum } from '../models/albumsInterface';

export const albumsResolver = {
  Query: {
    albums: (_: undefined, __: undefined, { dataSources }: any) =>
      dataSources.albumsAPI.getAlbums(),

    album: (_: undefined, { id }: IAlbum, { dataSources }: any) =>
      dataSources.albumsAPI.getAlbum(id),
  },
  Album: {
    id: (parent: IAlbum) => parent._id, //
  },
};
