import { gql } from 'apollo-server';

const typeTracks = gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Tracks {
    items: [Track]
  }

  type Query {
    tracks: Tracks
    track(id: ID): Track
  }
`;
export { typeTracks };
