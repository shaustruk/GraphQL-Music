import GenresAPI from './genres/service/genreService';
import UserAPI from './users/services/userServices';
import TrackAPI from './tracks/services/trackServices';

const dataSources = {
  genresAPI: new GenresAPI(),
  userAPI: new UserAPI(),
  trackAPI: new TrackAPI(),
};

export default dataSources;
