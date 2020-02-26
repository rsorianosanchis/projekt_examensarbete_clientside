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
    case REGISTER_OK:
      localStorage.setItem('token', action.payload.token);
      return { ...state, inSession: true, msg: null };
    case REGISTER_ERROR:
      return { ...state, token: null, msg: action.payload };
    default:
      return state;
  }
};
