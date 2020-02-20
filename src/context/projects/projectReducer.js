import { FORM_NEW_PROJECT } from '../../types/types';

export default (state, action) => {
  switch (action.type) {
    case FORM_NEW_PROJECT:
      return { ...state, showFormNewProject: true };
    default:
      return state;
  }
};
