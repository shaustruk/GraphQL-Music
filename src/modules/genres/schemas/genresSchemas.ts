import { gql } from 'apollo-server';

const typeGenres = gql`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Genres {
    items: [Genre]
    offset: Int
    limit: Int
    total: Int
  }

  type Query {
    getGenres(
      name: String
      description: String
      country: String
      year: Int
    ): Genres
    genre(id: ID): Genre
  }
`;
export { typeGenres };
