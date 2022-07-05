import GenresAPI from './genres/service/genreService';
import UserAPI from './users/services/userServices';

const dataSources = {
  genresAPI: new GenresAPI(),
  userAPI: new UserAPI(),
};

export default dataSources;
