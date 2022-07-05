import { genresResolver } from './genres/resolvers/genresResolver';
import { usersResolvers } from './users/resolvers/userresolver';

const resolvers = [genresResolver, usersResolvers];

export default resolvers;
