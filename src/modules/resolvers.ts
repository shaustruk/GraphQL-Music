import { genresResolver } from './genres/resolvers/genresResolver';
import { usersResolvers } from './users/resolvers/userresolver';
import { trackResolver } from './tracks/resolvers/trackResolvers';
import { artistsResolver } from './artists/resolvers/artistResolveer';
import { bandsResolver } from './bands/resolvers/bandsResolver';
import { albumsResolver } from './albums/resolver/albumsResolver';

const resolvers = [
  genresResolver,
  usersResolvers,
  trackResolver,
  artistsResolver,
  bandsResolver,
  albumsResolver,
];

export default resolvers;
