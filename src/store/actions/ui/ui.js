export const ActionTypes = {
  SELECT_GENRE: `SELECT_GENRE`,
  SET_MOVIE_ID: `SET_MOVIE_ID`,
  SET_MOVIES_LIMIT: `SET_MOVIE_LIMIT`,
  RESET_MOVIES_LIMIT: `RESET_MOVIES_LIMIT`
};

const ActionCreator = {

  selectGenre: (genre) => ({
    type: ActionTypes.SELECT_GENRE,
    payload: genre
  }),

  setMovieId: (movieId) => ({
    type: ActionTypes.SET_MOVIE_ID,
    payload: movieId
  }),

  setMoviesLimit: (limit) => ({
    type: ActionTypes.SET_MOVIES_LIMIT,
    payload: limit
  }),

  resetMoviesLimit: () => ({
    type: ActionTypes.RESET_MOVIES_LIMIT
  })

};

export default ActionCreator;
