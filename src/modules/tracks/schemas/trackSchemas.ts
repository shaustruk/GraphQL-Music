import { gql } from 'apollo-server';

const typeTracks = gql`
  type Track {
    _id: ID!
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
    track(id: ID!): Track
  }

  input CreateTrackInput {
    title: String!
    albums: [ID]
    bands: [ID]
    duration: Int
    released: Int
    genres: [ID]
  }

  type Mutation {
    createTrack(
      title: String!
      albums: [ID]
      bands: [ID]
      duration: Int
      released: Int
      genres: [ID]
    ): Track!
  }
`;
export { typeTracks };
