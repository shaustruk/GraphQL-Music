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

  type DEL {
    acknowledged: Boolean
    deletedCount: Int
  }

  input UpdateGenreInput {
    name: String
    description: String
    country: String
    year: Int
  }

  type Mutation {
    addGenre(
      name: String
      description: String
      country: String
      year: Int
    ): Genre!

    updaitGenre(id: ID!, body: UpdateGenreInput): Genre!

    deleteGenre(id: ID!): DEL
  }
`;
export { typeGenres };
