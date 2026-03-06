import { configureStore } from '@reduxjs/toolkit';

import createAPI from '../api';
import reducer from './reducer';
import DataOperation from './operations/data/data';
import UserOperation from './operations/user/user';

import UserActionCreator from './actions/user/user';
import { AuthStatus } from '../constants';

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.setAuthStatus(AuthStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});

export const initApp = () => {
  store.dispatch(DataOperation.loadMovies());
  store.dispatch(DataOperation.loadPromoMovie());
  store.dispatch(UserOperation.checkAuthStatus());
};

export default store;
