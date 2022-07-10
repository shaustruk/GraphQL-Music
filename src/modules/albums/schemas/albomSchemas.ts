import { gql } from 'apollo-server';

const typeAlbums = gql`
  type Album {
    id: ID!
    name: String!
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Albums {
    items: [Album]
    offset: Int
    limit: Int
    total: Int
  }

  type Query {
    albums: Albums
    album(id: ID): Album
  }
`;
export { typeAlbums };
