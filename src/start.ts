// В конструктор Сервера передается 2 аргумента:
import { ApolloServer } from 'apollo-server';
import dataSources from './modules/dataSources';
import resolvers from './modules/resolvers';
import typeDefs from './modules/typeDefs';

// схема и набор резолверов
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => dataSources,
  context: () => {
    return {
      token: 'foo',
    };
  },
});

// Запускаем сервер
server.listen().then(({ url }) => {
  console.log(`🚀  Сервер запущен по адресу: ${url}`);
});
