export interface IGetGenres {
  name: string;
  description: string;
  country: string;
  year: number;
}

export interface IGenre {
  _id: string;
  id?:string
  name: string;
  description: string;
  country: string;
  year: string;
}

export interface IGenres {
  items: [IGenre];
  limit: number;
  offset: number;
  total: number;
}
