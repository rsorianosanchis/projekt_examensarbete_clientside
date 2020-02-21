import {
  FORM_NEW_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  SHOW_NEW_PROJECT_FORM_ERROR
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
    default:
      return state;
  }
};
