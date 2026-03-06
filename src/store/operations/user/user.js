import ActionCreator from '../../actions/user/user';
import DataActionCreator from '../../actions/data/data';
import {AuthStatus, ResponseCodes} from '../../../constants';
import {formatUser} from '../../../utils';

const Operation = {
  checkAuthStatus: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.status === ResponseCodes.UNAUTHORIZED) {
          dispatch(ActionCreator.setAuthStatus(AuthStatus.NO_AUTH));
        }
        if (response.status === ResponseCodes.SUCCESS) {
          dispatch(ActionCreator.setUser(formatUser(response.data)));
          dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
        }
      })
      .catch((err) => {
        if (err.response.status === ResponseCodes.UNAUTHORIZED) {
          dispatch(ActionCreator.setAuthStatus(AuthStatus.NO_AUTH));
        } else {
          throw err;
        }
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    dispatch(DataActionCreator.setLoadingFlag(true));
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.setUser(formatUser(response.data)));
        dispatch(ActionCreator.setAuthStatus(AuthStatus.AUTH));
        dispatch(DataActionCreator.setLoadingFlag(false));
      })
      .catch(() => {
        dispatch(ActionCreator.setAuthStatus(AuthStatus.NO_AUTH));
        dispatch(DataActionCreator.setLoadingFlag(false));
        dispatch(ActionCreator.setLoginError(true));
      });
  }
};

export default Operation;
