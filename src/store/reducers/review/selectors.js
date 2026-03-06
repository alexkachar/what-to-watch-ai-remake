import NameSpace from '../../name-space';

const NAME_SPACE = NameSpace.REVIEWS;

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

export const getSendingFlag = (state) => {
  return state[NAME_SPACE].sending;
};

export const getErrorFlag = (state) => {
  return state[NAME_SPACE].error;
};
