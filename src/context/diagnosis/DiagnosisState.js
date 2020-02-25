import React, { useReducer } from 'react';
import diagnosisReducer from './diagnosisReducer';
import diagnosisContext from './diagnosisContext';
import { SHOW_MSG, HIDE_MSG } from '../../types/types';

const DiagnosisState = props => {
  const initialState = {
    info: null
  };

  const [state, dispatch] = useReducer(diagnosisReducer, initialState);

  //functions

  const showInfoFn = (msg, category) => {
    dispatch({
      type: SHOW_MSG,
      payload: { msg: msg, category: category }
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_MSG
      });
    }, 3000);
  };

  return (
    <diagnosisContext.Provider
      value={{
        info: state.info,
        showInfoFn
      }}
    >
      {props.children}
    </diagnosisContext.Provider>
  );
};

export default DiagnosisState;
