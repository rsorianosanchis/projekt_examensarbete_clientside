import { FORM_NEW_PROJECT, GET_PROJECTS } from '../../types/types';

export default (state, action) => {
  switch (action.type) {
    case FORM_NEW_PROJECT:
      return { ...state, showFormNewProject: true };
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
