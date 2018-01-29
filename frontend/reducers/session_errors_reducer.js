import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import lodash from 'lodash';

const _nullState = [];

const sessionErrorsReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return _nullState; //{username: asdfsa, password: sdfdasf}
    case RECEIVE_SESSION_ERRORS:
      // dlkfjs
      return action.errors;
    default:
      return oldState;
  }
};
