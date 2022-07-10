import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { ITrack, ITracks } from '../models/interface';

export default class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.tracks_url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async createTrack(
    title: string,
    albums: [],
    bands: [],
    duration: number,
    released: number,
    genres: []
  ) {
    const res = await this.post(
      `/`, // path
      { title, albums, bands, duration, released, genres } // request body
    );
    return res;
  }

  async getTracks() {
    const res = await this.get<ITracks>('/');
    console.log(res);
    return res;
  }

  async getTrack(id: string) {
    const res = await this.get<ITrack>(`/${id}`);
    console.log(res);
    return res;
  }
}
