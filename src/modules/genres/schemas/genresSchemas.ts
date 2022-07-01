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
  }

  type Query {
    genres: Genres
    genre(id: ID): Genre
  }
`;
export { typeGenres };
