import { typeGenres } from './genres/schemas/genresSchemas';
import { typeTracks } from './tracks/schemas/trackSchemas';
import { typeUsers } from './users/schemas/userSchemas';
import { typeBands } from './bands/schemas/bandsSchemas';
import { typeAlboms } from './albums/schemas/albomSchemas';
import { typeArtists } from './artists/schemas/artistSchemas';

const typeDefs = [
  typeUsers,
  typeGenres,
  typeTracks,
  typeBands,
  typeAlboms,
  typeArtists,
];

export default typeDefs;
