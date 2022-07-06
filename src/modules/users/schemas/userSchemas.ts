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
  }

  type JWT {
    jwt: String
  }

  type responseUser {
    user(
      firstName: String
      lastName: String
      password: String
      email: String
      id: ID!
    ): String
  }

  type Mutation {
    createUser(
      firstName: String
      lastName: String
      password: String
      email: String
    ): User!
    jwt(password: String!, email: String!): JWT
  }
`;
