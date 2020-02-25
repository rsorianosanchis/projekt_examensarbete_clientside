import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  LOGOUT
} from '../../types/types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_MSG:
      return {
        info: action.payload
      };
    case HIDE_MSG:
      return {
        info: null
      };
    default:
      return state;
  }
};
