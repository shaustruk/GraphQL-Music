import { gql } from 'apollo-server';

const typeBands = gql`
  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Bands {
    items: [Band]
  }

  type Member {
    artist: String
    instrument: String
    years: String
  }

  type Query {
    bands: Bands
    band(id: ID): Band
  }
`;
export { typeBands };
