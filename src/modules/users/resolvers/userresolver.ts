import { IID, ILogin, IUser, IUserRes } from '../../../interfaces';

export const usersResolvers = {
  Mutation: {
    createUser: async (
      parent: IUser,
      { firstName, lastName, password, email }: IUserRes,
      { dataSources }: any
    ) => {
      const res = await dataSources.userAPI.userRegister(
        firstName,
        lastName,
        password,
        email
      );
      return res;
    },
  },
  User: {
    id: (parent: IUser) => parent._id, //
  },
  Query: {
    id: async (_: undefined, { id }: IUser, { dataSources }: any) => {
      return await dataSources.userAPI.getUserID(id);
    },
    jwt: async (
      _: undefined,
      { password, email }: ILogin,
      { dataSources }: any
    ) => {
      return await dataSources.userAPI.getToken(password, email);
    },
  },
};
