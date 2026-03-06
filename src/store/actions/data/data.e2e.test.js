import ActionCreator, {ActionTypes} from './data';
import MOCK_MOVIES from '../../../test-data/mock-movies';

describe(`Data action creator work correctly`, () => {
  it(`Action creator for getMovies returns correct action`, () => {
    expect(ActionCreator.getMovies(MOCK_MOVIES)).toEqual({
      type: ActionTypes.GET_MOVIES,
      payload: MOCK_MOVIES,
    });
  });

  it(`Action creator for getPromoMovie returns correct action`, () => {
    expect(ActionCreator.getPromoMovie(MOCK_MOVIES[0])).toEqual({
      type: ActionTypes.GET_PROMO_MOVIE,
      payload: MOCK_MOVIES[0]
    });
  });

  it(`Action creator for getFavorites returns correct action`, () => {
    expect(ActionCreator.getFavorites(MOCK_MOVIES)).toEqual({
      type: ActionTypes.GET_FAVORITES,
      payload: MOCK_MOVIES
    });
  });

  it(`Action creator for setLoadingFlag returns correct action`, () => {
    expect(ActionCreator.setLoadingFlag(false)).toEqual({
      type: ActionTypes.SET_LOADING_FLAG,
      payload: false
    });
  });

});
