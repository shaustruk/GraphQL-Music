import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { IBand, IBands } from '../models/bandsInterface';

export default class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.bands_url;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  async getBands() {
    const res = await this.get<IBands>('/');
    return res;
  }

  async getBand(id: string) {
    const res = await this.get<IBand>(`/${id}`);
    return res;
  }
}
