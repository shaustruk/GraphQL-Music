import { gql } from 'apollo-server';

const typeFavorites = gql`
  type Favourite {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Favourites {
    items: [Favourite]
  }

  type Query {
    favourites: Favourites
  }
`;
export { typeFavorites };
