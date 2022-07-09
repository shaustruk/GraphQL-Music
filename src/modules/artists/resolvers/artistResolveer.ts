import { IArtist } from '../models/interfaces';
export const artistsResolver = {
  Query: {
    artists: (_: undefined, __: undefined, { dataSources }: any) =>
      dataSources.artistsAPI.getArtists(),

    artist: (_: undefined, { id }: IArtist, { dataSources }: any) =>
      dataSources.artistsAPI.getArtist(id),
  },
  Artist: {
    id: (parent: IArtist) => parent._id,
  },
};
