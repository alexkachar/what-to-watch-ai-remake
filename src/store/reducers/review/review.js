import {extend} from '../../../utils';
import {ActionTypes} from '../../actions/review/review';

const initialState = {
  reviews: [],
  sending: false,
  error: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ActionTypes.GET_REVIEWS:
      return extend(state, {
        reviews: action.payload
      });

    case ActionTypes.SET_SENDING_FLAG:
      return extend(state, {
        sending: action.payload
      });

    case ActionTypes.SET_ERROR_FLAG:
      return extend(state, {
        error: action.payload
      });

  }

  return state;
};

export default reducer;
