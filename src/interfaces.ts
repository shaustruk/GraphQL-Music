export interface ILogin {
  email: string;
  password: string;
}

export interface IId {
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

export interface IMutationRegister {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  _id: string;
}

export interface IGetGenres {
  name: string;
  description: string;
  country: string;
  year: number;
}
