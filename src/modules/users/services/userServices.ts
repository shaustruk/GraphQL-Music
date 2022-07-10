import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';
import { IUser } from '../../../interfaces';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.users_url;
  }

  // an example making an HTTP POST request
  async userRegister(
    firstName: string,
    lastName: string,
    password: string,
    email: string
  ) {
    const res = await this.post(
      `/register`, // path
      { firstName, lastName, password, email } // request body
    );
    return res;
  }

  async getToken(password: string, email: string) {
    const res = await this.post(
      `/login`, // path
      { password, email } // request body
    );
    return res;
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', this.context.token);
  }

  async getUserID(id: string) {
    const res = await this.get<IUser>(`/${id}`);
    return res;
  }
}
