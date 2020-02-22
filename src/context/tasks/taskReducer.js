import { GET_TASKS_OF_PROJECT } from '../../types/types';

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_OF_PROJECT:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          item => item.projectId === action.payload
        )
      };
    default:
      return state;
  }
};
