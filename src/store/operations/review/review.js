import ActionCreator from '../../actions/review/review';

const Operation = {
  loadReviews: (movieId) => (dispatch, getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then(
          (response) => {
            dispatch(ActionCreator.getReviews(response.data));
          });
  },

  submitReview: (movieId, {rating, text}) => (dispatch, getState, api) => {
    return api.post(`/comments/${movieId}`, {
      rating,
      comment: text
    })
      .then((response) => {
        dispatch(ActionCreator.getReviews(response.data));
        dispatch(ActionCreator.setSendingFlag(false));
        dispatch(ActionCreator.setErrorFlag(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setErrorFlag(true));
        dispatch(ActionCreator.setSendingFlag(false));
        throw err;
      });
  },

};

export default Operation;
