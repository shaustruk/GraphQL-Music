import { gql } from 'apollo-server';
import 'dotenv/config';

export const typeUsers = gql`
  type JWT {
    jwt: String!
  }

  type User {
    _id: String!
    firstName: String!
    lastName: String
    password: String!
    email: String!
  }

  type Query {
    jwt(email: String, password: String): JWT
    userID(id: ID): User
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
