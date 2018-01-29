import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import lodash from 'lodash';

const _nullState = { currentUser: null };

const sessionReducer = (oldState = _nullState, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = lodash.merge({}, oldState);
      newState['currentUser'] = action.currentUser;
      return newState; //{username: asdfsa, password: sdfdasf}
    default:
      return oldState;
  }
};
