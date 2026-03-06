import ActionCreator, {ActionTypes} from './review';
import mockReviews from '../../../test-data/mock-reviews';

describe(`Reviews action creator work correctly`, () => {

  it(`Action creator for getReviews returns correct action`, () => {
    expect(ActionCreator.getReviews(mockReviews)).toEqual({
      type: ActionTypes.GET_REVIEWS,
      payload: mockReviews
    });
  });

  it(`Action creator for setSendingFlag returns correct action`, () => {
    expect(ActionCreator.setSendingFlag(false)).toEqual({
      type: ActionTypes.SET_SENDING_FLAG,
      payload: false
    });
  });

  it(`Action creator for setErrorFlag returns correct action`, () => {
    expect(ActionCreator.setErrorFlag(false)).toEqual({
      type: ActionTypes.SET_ERROR_FLAG,
      payload: false
    });
  });

});
