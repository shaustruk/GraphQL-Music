import { gql } from 'apollo-server';

const typeGenres = gql`
  type Genre {
    id: ID!
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
    genres: Genres
    genre(id: ID): Genre
  }

  type Mutation {
    addGenre(
      name: String
      description: String
      country: String
      year: Int
    ): Genre!
  }
`;
export { typeGenres };
