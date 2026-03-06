import ActionCreator, {ActionTypes} from './user';
import USER from '../../../test-data/user';

describe(`User action creator work correctly`, () => {

  it(`Action creator for setAuthStatus returns correct action`, () => {
    expect(ActionCreator.setAuthStatus(`AUTH`)).toEqual({
      type: ActionTypes.SET_AUTH_STATUS,
      payload: `AUTH`
    });
  });

  it(`Action creator for setSendingFlag returns correct action`, () => {
    expect(ActionCreator.setUser(USER)).toEqual({
      type: ActionTypes.SET_USER,
      payload: USER
    });
  });

});
