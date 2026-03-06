import {extend} from '../../../utils';
import {ActionTypes} from '../../actions/ui/ui';
import {INITIAL_MOVIES_LIMIT} from '../../../constants';

const initialState = {
  selectedGenre: `All genres`,
  movieId: null,
  moviesLimit: INITIAL_MOVIES_LIMIT
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SELECT_GENRE:
      return extend(state, {
        selectedGenre: action.payload
      });

    case ActionTypes.SET_MOVIE_ID:
      return extend(state, {
        movieId: action.payload
      });

    case ActionTypes.SET_MOVIES_LIMIT:
      return extend(state, {
        moviesLimit: state.moviesLimit + action.payload
      });

    case ActionTypes.RESET_MOVIES_LIMIT:
      return extend(state, {
        moviesLimit: initialState.moviesLimit
      });

  }
  return state;
};

export default reducer;
