import {
  FORM_NEW_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  SHOW_NEW_PROJECT_FORM_ERROR,
  SELECTED_PROJECT,
  DELETE_SELECTED_PROJECT
} from '../../types/types';

export default (state, action) => {
  switch (action.type) {
    case FORM_NEW_PROJECT:
      return { ...state, showFormNewProject: true };
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        showFormNewProject: false,
        showFormNewProjectError: false
      };
    case SHOW_NEW_PROJECT_FORM_ERROR:
      return {
        ...state,
        showFormNewProjectError: true
      };
    case SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: action.payload
      };
    case DELETE_SELECTED_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.id !== action.payload
        ),
        selectedProject: null
      };
    default:
      return state;
  }
};
