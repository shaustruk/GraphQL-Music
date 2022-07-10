import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { IDelete, IGenre, IGenres, IGetGenres } from '../models/intarfaces';

export default class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    // super();
    this.baseURL = process.env.genres_url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getGenres() {
    const res = await this.get<IGenres>('/');
    return res;
  }

  async getGenre(id: string) {
    const res = await this.get<IGenre>(`/${id}`);
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

  async putGenre(id: string, body: IGetGenres) {
    const res = this.put(
      `/${id}`, // path
      body
    );
    return res;
  }

  async delGenre(id: IGenre) {
    return await this.delete<IDelete>(`/${id}`);
  }
}
