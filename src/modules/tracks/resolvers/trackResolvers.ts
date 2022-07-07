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
    tracks: (_: undefined, {}, { dataSources }: any) =>
      dataSources.genresAPI.getTracks(),
  },
};
