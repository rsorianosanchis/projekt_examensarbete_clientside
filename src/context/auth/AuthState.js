import React, { useReducer } from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import {
  REGISTER_OK,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_OK,
  LOGIN_ERROR,
  LOGOUT
} from '../../types/types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    inSession: null,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //functions

  return (
    <authContext.Provider
      value={{
        token: state.token
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
