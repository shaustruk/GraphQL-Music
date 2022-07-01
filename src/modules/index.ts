import { gql } from 'apollo-server';
import { typeAlboms } from './albums/schemas/albomSchemas';
import { typeBands } from './bands/schemas/bandsSchemas';
import { typeArtists } from './artists/schemas/artistSchemas';
import { typeUsers } from './users/schemas/userSchemas';
import { typeGenres } from './genres/schemas/genresSchemas';
import { typeTracks } from './tracks/schemas/trackSchemas';
import { typeFavorites } from './favourites/schemas/favoriteSchemas';

const schemas = gql`
  ${typeUsers}
  ${typeAlboms}
  ${typeBands}
  ${typeArtists}
  ${typeGenres}
  ${typeTracks}
  ${typeFavorites}
`;
export { schemas };
