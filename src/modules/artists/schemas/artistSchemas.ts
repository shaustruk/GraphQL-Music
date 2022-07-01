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
    instruments: String
  }

  type Artists {
    items: Artist
  }

  type Query {
    artists: Artists
    artist(id: ID): Artist
  }
`;
export { typeArtists };
