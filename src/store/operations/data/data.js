
import DataActionCreator from '../../actions/data/data';
import {formatMovie, formatMovies} from '../../../utils';
import {RequestCodes} from '../../../constants';

const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.get(`/films`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getMovies(formatMovies(response.data)));
            dispatch(DataActionCreator.setLoadingFlag(false));
          });
  },

  loadPromoMovie: () => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.get(`/films/promo`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getPromoMovie(formatMovie(response.data)));
            dispatch(DataActionCreator.setLoadingFlag(false));
          });
  },

  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(
          (response) => {
            dispatch(DataActionCreator.getFavorites(formatMovies(response.data)));
          });
  },

  setFavoriteStatus: (offerId, isFavorite) => (dispatch, getState, api) => {
    let request = isFavorite ? RequestCodes.REMOVE : RequestCodes.ADD;
    return api.post(`/favorite/${offerId}/${request}`, {})
      .then(() => {
        dispatch(Operation.loadFavorites());
        dispatch(Operation.loadMovies());
        dispatch(Operation.loadPromoMovie());
      });
  }

};

export default Operation;
