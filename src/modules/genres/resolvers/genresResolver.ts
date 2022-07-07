import { IGenre, IGetGenres } from '../models/intarfaces';

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
  },
  Genre: {
    id: (parent: IGenre) => parent._id, //
  },
};
