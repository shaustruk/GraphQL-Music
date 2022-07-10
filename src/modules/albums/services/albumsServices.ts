import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { IAlbums, IAlbum } from '../models/albumsInterface';

export default class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3005/v1/albums';
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getAlbums() {
    const res = await this.get<IAlbums>('/');
    return res;
  }

  async getAlbum(id: string) {
    const res = await this.get<IAlbum>(`/${id}`);
    return res;
  }
}
