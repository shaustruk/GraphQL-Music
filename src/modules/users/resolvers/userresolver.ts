import { IMutationRegister } from '../../../interfaces';

export const usersResolvers = {
  Mutation: {
    createUser: async (
      _: undefined,
      { firstName, lastName, password, email }: IMutationRegister,
      { dataSources }: any
    ) => {
      return await dataSources.userAPI.userRegister(
        firstName,
        lastName,
        password,
        email
      );
    },
  },
};
