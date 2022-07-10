import { gql } from 'apollo-server';

const typeArtists = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Artists {
    items: [Artist]
    offset: Int
    limit: Int
    total: Int
  }

  type Query {
    artists: Artists
    artist(id: ID): Artist
  }

  type DEL {
    acknowledged: Boolean
    deletedCount: Int
  }
`;
export { typeArtists };
