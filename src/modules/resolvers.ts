import { genresResolver } from './genres/resolvers/genresResolver';
import { usersResolvers } from './users/resolvers/userresolver';
import { trackResolver } from './tracks/resolvers/trackResolvers';

const resolvers = [genresResolver, usersResolvers, trackResolver];

export default resolvers;
