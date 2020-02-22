import {
  GET_TASKS_OF_PROJECT,
  ADD_TASK,
  SHOW_NEW_TASK_FORM_ERROR,
  DELETE_TASK
} from '../../types/types';

export default (state, action) => {
  switch (action.type) {
    case GET_TASKS_OF_PROJECT:
      return {
        ...state,
        projectTasks: state.tasks.filter(
          item => item.projectId === action.payload
        )
      };
    case ADD_TASK: //add task to genral tasks array
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        showFormNewTaskError: false
      };
    case SHOW_NEW_TASK_FORM_ERROR:
      return { ...state, showFormNewTaskError: true };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
