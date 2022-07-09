import { gql } from 'apollo-server';
const typeMembers = gql`
  type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
  }
`;

export { typeMembers };
