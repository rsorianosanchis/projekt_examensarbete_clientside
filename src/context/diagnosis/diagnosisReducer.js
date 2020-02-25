import { SHOW_MSG, HIDE_MSG } from '../../types/types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_MSG:
      return {
        info: action.payload
      };
    case HIDE_MSG:
      return {
        info: null
      };
    default:
      return state;
  }
};
