import { IGetGenres } from '../../../interfaces';

export const genresResolver = {
  Query: {
    getGenres: (
      _: undefined,
      { name, description, country, year }: IGetGenres,
      { dataSources }: any
    ) => dataSources.genresAPI.getGenres(name, description, country, year),
  },
};
