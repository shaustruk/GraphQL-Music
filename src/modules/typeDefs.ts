import { typeGenres } from './genres/schemas/genresSchemas';
import { typeTracks } from './tracks/schemas/trackSchemas';
import { typeUsers } from './users/schemas/userSchemas';
import { typeBands } from './bands/schemas/bandsSchemas';
import { typeAlbums } from './albums/schemas/albomSchemas';
import { typeArtists } from './artists/schemas/artistSchemas';
import { typeMembers } from './member/memberSchemas';

const typeDefs = [
  typeUsers,
  typeGenres,
  typeTracks,
  typeBands,
  typeAlbums,
  typeArtists,
  typeMembers,
];

export default typeDefs;
