import { RESTDataSource } from 'apollo-datasource-rest';
import 'dotenv/config';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3004/v1/users';
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
}
