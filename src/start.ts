import { ApolloServer } from 'apollo-server';
import { schemas, schemas as typeDefs } from './modules/index';
const server = new ApolloServer({ typeDefs });
// Запускаем сервер
server.listen().then(({ url }) => {
  console.log(`🚀  Сервер запущен по адресу: ${url}`);
});
