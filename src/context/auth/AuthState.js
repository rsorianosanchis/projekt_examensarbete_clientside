import React, { useReducer } from 'react';
import authReducer from './authReducer';
import authContext from './authContext';
import clientAxios from '../../config/axios';
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
    user: null,
    msg: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //functions
  //user register
  const registerUserFn = async data => {
    try {
      const response = await clientAxios.post(
        `${process.env.REACT_APP_BACKEND_URL}/backend/user`, //no funciona
        data
      );
      console.log(response.data); ///token
      dispatch({
        type: REGISTER_OK,
        payload: response.data
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_ERROR
      });
    }
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        inSession: state.inSession,
        user: state.user,
        registerUserFn
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
