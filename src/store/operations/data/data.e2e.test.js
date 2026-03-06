import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api';
import Operation from './data';
import {ActionTypes} from '../../actions/data/data';
import RAW_MOVIES from '../../../test-data/mock-movies';
import {formatMovie, formatMovies} from '../../../utils';
import {RequestCodes} from '../../../constants';

const api = createAPI(jest.fn());

describe(`Load operation works correctly`, () => {
  it(`Should make a correct API call to /films and get movies`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, RAW_MOVIES);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.SET_LOADING_FLAG,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionTypes.GET_MOVIES,
          payload: formatMovies(RAW_MOVIES)
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionTypes.SET_LOADING_FLAG,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /promo and get promoMovie`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadPromoMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, RAW_MOVIES[0]);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.SET_LOADING_FLAG,
          payload: true
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionTypes.GET_PROMO_MOVIE,
          payload: formatMovie(RAW_MOVIES[0])
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionTypes.SET_LOADING_FLAG,
          payload: false
        });
      });
  });

  it(`Should make a correct API call to /favorite and get favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, RAW_MOVIES);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.GET_FAVORITES,
          payload: formatMovies(RAW_MOVIES)
        });
      });
  });

  it(`Should make a correct API call to /favorite add set movie as favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadFavorites();
    const movieId = 1;

    apiMock
    .onGet(`/favorite`).reply(200, RAW_MOVIES)
    .onPost(`/favorite/${movieId}/${RequestCodes.ADD}`).reply(200, {});

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.GET_FAVORITES,
          payload: formatMovies(RAW_MOVIES)
        });

      });
  });

});
