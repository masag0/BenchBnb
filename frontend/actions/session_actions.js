import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


// suggested receive session erros watch out!

export const login = (user) => dispatch => {
  return APIUtil.login(user)
    .then(response => dispatch(receiveCurrentUser(response)),
          errors => dispatch(receiveSessionErrors(errors)));
};

export const logout = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveSessionErrors(errors)));
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user)
    .then(response => dispatch(receiveCurrentUser(response)),
    errors => dispatch(receiveErrors(errors)));
};
