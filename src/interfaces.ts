export interface ILogin {
  email: string;
  password: string;
}

export interface IID {
  id: string;
}

export interface IDataSource {
  extractUpdateTime: string;
  fields: [];
  id: string;
  isExtract: boolean;
  isPublished: boolean;
  name: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  _id: string;
  id?: string;
}

export interface IUserRes {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}
