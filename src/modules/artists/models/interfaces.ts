export interface IGetArtists {
  name: string;
  description: string;
  country: string;
  year: number;
}

export interface IArtist {
  _id: string;
  id?: string;
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bandsIds: string[];
  instruments: string[];
}

export interface IArtists {
  items: [IArtist];
  limit: number;
  offset: number;
  total: number;
}
// export interface IPutGenres {
//   id: number;
//   body: IGetGenres;
// }

// export interface IGenre {
//   _id: string;
//   id?: string;
//   name: string;
//   description: string;
//   country: string;
//   year: string;
// }

// export interface IGenres {
//   items: [IGenre];
//   limit: number;
//   offset: number;
//   total: number;
// }

// export interface IDelete {
//   acknowledged: boolean;
//   deletedCount: number;
// }
