import { gql } from 'apollo-server';

const typeAlboms = gql`
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
    alboms: Albums
    albom(_id: ID): Album
  }
`;
export { typeAlboms };
