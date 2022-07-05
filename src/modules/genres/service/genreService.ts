import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export default class GenresAPI extends RESTDataSource {
  constructor() {
    super();
    // super();
    this.baseURL = process.env.genres_url;
  }

  async getGenres() {
    const res = await this.get('/');

    return res.items;
  }
}
