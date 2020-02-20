import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_NEW_PROJECT } from '../../types/types';

const ProjectState = props => {
  const initialState = {
    showFormNewProject: false
  };
  //dispatch för kör actions
  const [state, dispatch] = useReducer(projectReducer, initialState);
  //functions + CRUD functions
  const setShowForm = () => {
    dispatch({
      type: FORM_NEW_PROJECT
    });
  };
  //
  return (
    <projectContext.Provider
      value={{
        showForm: state.showFormNewProject,
        setShowForm
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
