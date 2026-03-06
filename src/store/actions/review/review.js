export const ActionTypes = {
  GET_REVIEWS: `GET_REVIEWS`,
  SET_SENDING_FLAG: `SET_SENDING_FLAG`,
  SET_ERROR_FLAG: `SET_ERROR_FLAG`,
};

const ActionCreator = {
  getReviews: (reviews) => {
    return {
      type: ActionTypes.GET_REVIEWS,
      payload: reviews
    };
  },

  setSendingFlag: (flag) => {
    return {
      type: ActionTypes.SET_SENDING_FLAG,
      payload: flag
    };
  },

  setErrorFlag: (flag) => {
    return {
      type: ActionTypes.SET_ERROR_FLAG,
      payload: flag
    };
  }

};

export default ActionCreator;
