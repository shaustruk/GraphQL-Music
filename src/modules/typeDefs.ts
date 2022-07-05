import { typeGenres } from './genres/schemas/genresSchemas';
import { typeUsers } from './users/schemas/userSchemas';

const typeDefs = [typeUsers, typeGenres];

export default typeDefs;
