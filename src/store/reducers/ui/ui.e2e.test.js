import {ActionTypes} from '../../actions/ui/ui';
import reducer from './ui';
import {INITIAL_MOVIES_LIMIT, MOVIES_LIMIT_ADD_STEP} from '../../../constants';

const NEW_LIMIT = INITIAL_MOVIES_LIMIT + MOVIES_LIMIT_ADD_STEP;

describe(`UI reducer work correctly`, () => {

  it(`Should change genre with given value`, () => {
    const state1 = {
      selectedGenre: `All genres`
    };
    const action = {
      type: ActionTypes.SELECT_GENRE,
      payload: `Comedy`
    };
    expect(reducer(state1, action)).toMatchObject({
      selectedGenre: `Comedy`
    });
  });

  it(`Should change movieId with given value`, () => {
    const state2 = {
      movieId: null
    };
    const action = {
      type: ActionTypes.SET_MOVIE_ID,
      payload: 1
    };
    expect(reducer(state2, action)).toMatchObject({
      movieId: 1
    });
  });

  it(`Should add given value to moviesLimit`, () => {
    const state3 = {
      moviesLimit: INITIAL_MOVIES_LIMIT
    };
    const action = {
      type: ActionTypes.SET_MOVIES_LIMIT,
      payload: MOVIES_LIMIT_ADD_STEP
    };
    expect(reducer(state3, action)).toMatchObject({
      moviesLimit: NEW_LIMIT
    });
  });

  it(`Should reset moviesLimit correctlyt`, () => {
    const state4 = {
      moviesLimit: NEW_LIMIT
    };
    const action = {
      type: ActionTypes.RESET_MOVIES_LIMIT
    };
    expect(reducer(state4, action)).toMatchObject({
      moviesLimit: INITIAL_MOVIES_LIMIT
    });
  });

});
