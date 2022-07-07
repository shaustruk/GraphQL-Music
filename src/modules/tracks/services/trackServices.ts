import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

export default class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.tracks_url;
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
    const res = await this.get('/');

    return res.items;
  }
}
