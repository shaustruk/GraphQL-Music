import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { IGenre, IGenres } from '../models/intarfaces';

export default class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    // super();
    this.baseURL = process.env.genres_url;
  }

  async getGenres() {
    const res = await this.get<IGenres>('/');
    return res;
  }

  async getGenre(id: string) {
    const res = await this.get<IGenre>('/', { id });
    return res;
  }

  async createGenre(
    name: string,
    description: string,
    country: string,
    year: number
  ) {
    const res = await this.post('', { name, description, country, year });
    return res;
  }
}
