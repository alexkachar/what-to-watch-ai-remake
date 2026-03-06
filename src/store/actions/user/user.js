export const ActionTypes = {
  SET_AUTH_STATUS: `SET_AUTH_STATUS`,
  SET_USER: `SET_USER`
};

const ActionCreator = {

  setAuthStatus: (status) => ({
    type: ActionTypes.SET_AUTH_STATUS,
    payload: status
  }),

  setUser: (user) => ({
    type: ActionTypes.SET_USER,
    payload: user
  })

};

export default ActionCreator;
