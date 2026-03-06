import {extend} from '../../../utils';
import {ActionTypes} from '../../actions/user/user';
import {AuthStatus} from '../../../constants';

const initialState = {
  authStatus: AuthStatus.NO_AUTH,
  user: {}
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.SET_AUTH_STATUS:
      return extend(state, {
        authStatus: action.payload
      });

    case ActionTypes.SET_USER:
      return extend(state, {
        user: action.payload
      });
  }

  return state;
};

export default reducer;
