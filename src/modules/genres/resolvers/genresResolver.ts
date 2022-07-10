import { IGenre, IGetGenres, IPutGenres } from '../models/intarfaces';

export const genresResolver = {
  Query: {
    genres: (_: undefined, __: undefined, { dataSources }: any) =>
      dataSources.genresAPI.getGenres(),

    genre: (_: undefined, { id }: IGenre, { dataSources }: any) =>
      dataSources.genresAPI.getGenre(id as string),
  },
  Mutation: {
    addGenre: (
      parent: IGenre,
      { name, description, country, year }: IGetGenres,
      { dataSources }: any
    ) => dataSources.genresAPI.createGenre(name, description, country, year),

    updaitGenre: (
      parent: undefined,
      { id, body }: IPutGenres,
      { dataSources }: any
    ) => dataSources.genresAPI.putGenre(id, body),

    deleteGenre: (parent: undefined, { id }: IGenre, { dataSources }: any) =>
      dataSources.genresAPI.delGenre(id as string),
  },

  Genre: {
    id: (parent: IGenre) => parent._id, //
  },
};
