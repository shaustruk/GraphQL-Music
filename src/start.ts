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
  context: ({ req }) => {
    // Получаем токен из заголовка
    const token = req.headers.authorization || '';
    // Пытаемся получить юзера по токену
    return { token };
  },
});

// Запускаем сервер
server.listen().then(({ url }) => {
  console.log(`🚀  Сервер запущен по адресу: ${url}`);
});
