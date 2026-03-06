import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../../api';
import Operation from './review';
import {ActionTypes} from '../../actions/review/review';
import MOCK_REVIEWS from '../../../test-data/mock-reviews';

const api = createAPI(jest.fn());

describe(`Review operation works correctly`, () => {
  it(`Should make a correct API call to /comments with id = 1 and get reviews`, () => {
    const movieId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.loadReviews(1);

    apiMock
      .onGet(`/comments/${movieId}`)
      .reply(200, MOCK_REVIEWS);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.GET_REVIEWS,
          payload: MOCK_REVIEWS
        });
      });
  });

  it(`Should make a correct API call to /comments with id = 1, post a review and load reviews`, () => {
    const movieId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const rating = 5;
    const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;

    const dataLoader = Operation.submitReview(1, {rating, text});

    apiMock
      .onGet(`/comments/${movieId}`).reply(200, MOCK_REVIEWS)
      .onPost(`/comments/${movieId}`).reply(200, MOCK_REVIEWS);

    return dataLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionTypes.GET_REVIEWS,
          payload: MOCK_REVIEWS
        });
      });
  });

});
