import { gql } from 'apollo-server';
import 'dotenv/config';

export const typeUsers = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }

  type Query {
    id(id: ID!): User
    jwt(password: String!, email: String!): JWT
  }

  type JWT {
    jwt: String
  }

  type Mutation {
    createUser(
      firstName: String
      lastName: String
      password: String
      email: String
    ): User!
  }
`;
