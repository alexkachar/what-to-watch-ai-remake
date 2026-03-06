import NameSpace from '../../name-space';
import {AuthStatus} from '../../../constants';

const NAME_SPACE = NameSpace.USER;

export const getAuthStatus = (state) => {
  return state[NAME_SPACE].authStatus;
};

export const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export const getAuthFlag = (state) => {
  return state[NAME_SPACE].authStatus === AuthStatus.AUTH;
};
