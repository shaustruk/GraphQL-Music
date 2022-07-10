import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { IArtist, IArtists } from '../models/interfaces';

export default class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.artists_url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getArtists() {
    const res = await this.get<IArtists>('/');
    return res;
  }

  async getArtist(id: string) {
    const res = await this.get<IArtist>(`/${id}`);
    return res;
  }
}
