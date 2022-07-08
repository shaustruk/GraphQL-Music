export interface IGetGenres {
  name: string;
  description: string;
  country: string;
  year: number;
}

export interface IPutGenres {
  id: number;
  body: IGetGenres;
}

export interface IGenre {
  _id: string;
  id?: string;
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

export interface IDelete {
  acknowledged: boolean;
  deletedCount: number;
}
