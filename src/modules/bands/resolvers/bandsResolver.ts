import { IBand, IBands } from '../models/bandsInterface';

export const bandsResolver = {
  Query: {
    bands: (_: undefined, __: undefined, { dataSources }: any) =>
      dataSources.bandsAPI.getBands(),

    band: (_: undefined, { id }: IBand, { dataSources }: any) =>
      dataSources.bandsAPI.getBand(id as string),
  },
  Band: {
    id: (parent: IBand) => parent._id, //
  },
};
