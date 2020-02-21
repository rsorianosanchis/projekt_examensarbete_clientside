import React, { useReducer } from 'react';
import uuid from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import {
  FORM_NEW_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  SHOW_NEW_PROJECT_FORM_ERROR,
  SELECTED_PROJECT
} from '../../types/types';

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
    showFormNewProjectError: false,
    projects: [],
    selectedProject: null
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
  // add new project function (parameter project kommer from NewProject.js och det är en object)
  const addNewProjectFn = project => {
    project.id = uuid.v4();
    dispatch({
      type: ADD_PROJECT,
      payload: project
    });
  };
  //
  const showFormErrorFn = () => {
    dispatch({
      type: SHOW_NEW_PROJECT_FORM_ERROR
    });
  };

  return (
    <projectContext.Provider
      value={{
        showForm: state.showFormNewProject,
        projects: state.projects,
        showFormNewProjectError: state.showFormNewProjectError,
        selectedProject: state.selectedProject,
        setShowFormFn,
        getProjectsFn,
        addNewProjectFn,
        showFormErrorFn
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
