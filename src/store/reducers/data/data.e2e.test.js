import {ActionTypes} from '../../actions/data/data';
import reducer from './data';
import MOCK_MOVIES from '../../../test-data/mock-movies';

describe(`Data reducer work correctly`, () => {

  it(`Should change movies with given value`, () => {
    const state1 = {
      movies: []
    };
    const action = {
      type: ActionTypes.GET_MOVIES,
      payload: MOCK_MOVIES
    };
    expect(reducer(state1, action)).toMatchObject({
      movies: MOCK_MOVIES
    });
  });

  it(`Should change promoMovie with given value`, () => {
    const state2 = {
      promoMovie: null
    };
    const action = {
      type: ActionTypes.GET_PROMO_MOVIE,
      payload: MOCK_MOVIES[0]
    };
    expect(reducer(state2, action)).toMatchObject({
      promoMovie: MOCK_MOVIES[0]
    });
  });

  it(`Should change favorites with given value `, () => {
    const state3 = {
      favorites: []
    };
    const action = {
      type: ActionTypes.GET_FAVORITES,
      payload: MOCK_MOVIES
    };
    expect(reducer(state3, action)).toMatchObject({
      favorites: MOCK_MOVIES
    });
  });

  it(`Should change loading with given flag `, () => {
    const state3 = {
      loading: true
    };
    const action = {
      type: ActionTypes.SET_LOADING_FLAG,
      payload: false
    };
    expect(reducer(state3, action)).toMatchObject({
      loading: false
    });
  });
});
