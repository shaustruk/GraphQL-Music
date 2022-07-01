import { gql } from 'apollo-server'

const typeUsers = gql`
  type JWT {
    jwt: String
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }

  type Query {
    jwt(email: String, password: String): JWT
    user(_id: ID): User
  }
`
export { typeUsers }
