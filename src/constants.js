export const API_BASE = `https://4.react.pages.academy/wtw`;

export const AVATAR_BASE = `https://htmlacademy-react-3.appspot.com`;

export const AppRoutes = {
  MAIN: `/`,
  MOVIE: `/film/:id`,
  PLAYER: `/player/:id`,
  ADD_REVIEW: `/film/:id/review`,
  LOGIN: `/signin`,
  FAVORITES: `/favorites`,
};

export const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const ResponseCodes = {
  UNAUTHORIZED: 401,
  SUCCESS: 200
};

export const RequestCodes = {
  ADD: 1,
  REMOVE: 0
};

export const RECOMENDED_MOVIES_LIMIT = 4;

export const MovieTabs = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

export const tabs = [
  `Overview`,
  `Details`,
  `Reviews`
];

export const INITIAL_MOVIES_LIMIT = 8;

export const MOVIES_LIMIT_ADD_STEP = 8;

export const LoginErrorMesseges = {
  EMAIL: `Please enter a valid email address`,
  PASSWORD: `Sorry, the password is too short`,
  LOGIN_FAILED: `We can’t recognize this email and password combination. Please try again.`
};

export const SEND_REVIEW_ERROR = `Sorry, can’t sugmit your review. Please try again later.`;

export const Ratings = {
  DEFAULT: 3,
  MIN: 1,
  MAX: 5
};

export const ReviewLenghts = {
  MIN: 50,
  MAX: 400
};

export const Months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];
