import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
  const initialState = {
    showFormNewProject: false
  };
  //dispatch actions

  const [state, dispatch] = useReducer(projectReducer, initialState);
  //CRUD functioner

  //
  return (
    <projectContext.Provider value={{ showForm: state.showFormNewProject }}>
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
