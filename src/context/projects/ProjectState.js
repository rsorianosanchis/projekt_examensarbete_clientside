import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_NEW_PROJECT } from '../../types/types';
import { GET_PROJECTS } from '../../types/types';

//temporal
const data = [
  { id: 1, name: 'mat vagn' },
  { id: 2, name: 'school' },
  { id: 3, name: 'arbete' },
  { id: 4, name: 'resor' }
];

const ProjectState = props => {
  // initial state fot alla states
  const initialState = {
    showFormNewProject: false,
    projects: []
  };
  //dispatch för kör actions
  const [state, dispatch] = useReducer(projectReducer, initialState);
  //functions + CRUD functions
  const setShowFormFn = () => {
    dispatch({ type: FORM_NEW_PROJECT });
  };
  //
  // PENDIENTE ENVIAR COMO PARAMETRO DE FUNCION LOS PROYECTOS DE LA BASE DE DATOS DESDE lISTPROJECT use effect
  //const getProjectsFn = data => {
  const getProjectsFn = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: data
    });
  };

  return (
    <projectContext.Provider
      value={{
        showForm: state.showFormNewProject,
        projects: state.projects,
        setShowFormFn,
        getProjectsFn
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
