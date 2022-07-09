import dataSources from '../../dataSources';
import { ITrack, ITrackRes } from '../models/interface';

export const trackResolver = {
  Mutation: {
    createTrack: async (
      parent: ITrack,
      { title, albums, bands, duration, released, genres }: ITrackRes,
      { dataSources }: any
    ) => {
      const res = await dataSources.trackAPI.createTrack(
        title,
        albums,
        bands,
        duration,
        released,
        genres
      );
    },
  },
  Query: {
    tracks: (_: undefined, __: undefined, { dataSources }: any) =>
      dataSources.tracksAPI.getTracks(),

    track: (_: undefined, { id }: ITrack, { dataSources }: any) =>
      dataSources.tracksAPI.getTrack(id),
  },
  Track: {
    id: (parent: ITrack) => parent._id, //
  },
};
