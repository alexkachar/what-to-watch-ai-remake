export const ActionTypes = {
  GET_MOVIES: `GET_MOVIES`,
  GET_PROMO_MOVIE: `GET_PROMO_MOVIE`,
  GET_FAVORITES: `GET_FAVORITES`,
  SET_LOADING_FLAG: `SET_LOADING_FLAG`,
};

const ActionCreator = {

  getMovies: (movies) => ({
    type: ActionTypes.GET_MOVIES,
    payload: movies
  }),

  getPromoMovie: (movie) => ({
    type: ActionTypes.GET_PROMO_MOVIE,
    payload: movie
  }),

  getFavorites: (movies) => ({
    type: ActionTypes.GET_FAVORITES,
    payload: movies
  }),

  setLoadingFlag: (flag) => ({
    type: ActionTypes.SET_LOADING_FLAG,
    payload: flag
  }),

};

export default ActionCreator;
