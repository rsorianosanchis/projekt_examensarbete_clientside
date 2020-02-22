import {
  GET_TASKS_OF_PROJECT,
  ADD_TASK,
  SHOW_NEW_TASK_FORM_ERROR,
  DELETE_TASK,
  TASK_STATE,
  SELECTED_TASK_TO_EDIT,
  EDIT_TASK
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
        tasks: [action.payload, ...state.tasks],
        showFormNewTaskError: false
      };
    case SHOW_NEW_TASK_FORM_ERROR:
      return { ...state, showFormNewTaskError: true };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(item => item.id !== action.payload)
      };
    case TASK_STATE:
      return {
        ...state,
        projectTasks: [
          state.projectTasks.map(item => {
            if (item.id === action.payload) {
              item.state === true ? (item.state = false) : (item.state = true);
            }
            return item;
          })
        ]
      };
    case SELECTED_TASK_TO_EDIT:
      return {
        ...state,
        selectedTask: action.payload
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => {
          if (item.id === action.payload.id) {
            item.name = action.payload.name;
          }
          return item;
        }),
        selectedTask: null
      };
    default:
      return state;
  }
};
