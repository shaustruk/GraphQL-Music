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
  }

  type Query {
    albums: Albums
    album(id: ID): Album
  }
`;
export { typeAlbums };
