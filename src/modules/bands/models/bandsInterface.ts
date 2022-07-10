import { Member } from '../../../interfaces';

export interface IBand {
  _id: string;
  id?: string;
  name: string;
  origin: string;
  membersId: Member[];
  website: string;
  genresIds: string[];
}

export interface IBands {
  bands: [IBand];
  limit: number;
  offset: number;
  total: number;
}
