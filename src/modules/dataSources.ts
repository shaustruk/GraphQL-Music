import GenresAPI from './genres/service/genreService';
import UserAPI from './users/services/userServices';
import TrackAPI from './tracks/services/trackServices';
import ArtistsAPI from './artists/services/serviceArtist';
import BandsAPI from './bands/services/bandService';

const dataSources = {
  genresAPI: new GenresAPI(),
  userAPI: new UserAPI(),
  tracksAPI: new TrackAPI(),
  artistsAPI: new ArtistsAPI(),
  bandsAPI: new BandsAPI(),
};

export default dataSources;
