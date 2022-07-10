import { gql } from 'apollo-server';

const typeBands = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Bands {
    items: [Band]
    offset: Int
    limit: Int
    total: Int
  }

  type Query {
    bands: Bands
    band(id: ID): Band
  }
`;
export { typeBands };
