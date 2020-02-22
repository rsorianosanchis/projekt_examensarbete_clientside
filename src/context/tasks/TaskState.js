import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import {
  GET_TASKS_OF_PROJECT,
  ADD_TASK,
  SHOW_NEW_TASK_FORM_ERROR
} from '../../types/types';

const TaskState = props => {
  const initialState = {
    tasks: [
      { taskName: 'Tomates', state: true, projectId: 1 },
      { taskName: 'Bread', state: true, projectId: 2 },
      { taskName: 'Fisk', state: false, projectId: 3 },
      { taskName: 'kiwi', state: true, projectId: 4 },
      { taskName: 'hh', state: true, projectId: 1 },
      { taskName: 'Breallld', state: true, projectId: 2 },
      { taskName: 'Fasdisk', state: false, projectId: 2 },
      { taskName: 'Potatasdis', state: true, projectId: 3 }
    ],
    projectTasks: null,
    showFormNewTaskError: false
  };

  //state dispatch declaration
  const [state, dispatch] = useReducer(taskReducer, initialState);

  //functions
  //
  //get tasks for specific id project
  const getTasksFn = projectId => {
    dispatch({
      type: GET_TASKS_OF_PROJECT,
      payload: projectId
    });
  };
  //add task to tasks
  const addTaskFn = task => {
    console.log(task);

    dispatch({ type: ADD_TASK, payload: task });
  };
  //
  // error om new task tom field
  const showFormErrorFn = () => {
    dispatch({
      type: SHOW_NEW_TASK_FORM_ERROR
    });
  };

  return (
    <taskContext.Provider
      value={{
        projectTasks: state.projectTasks,
        showFormNewTaskError: state.showFormNewTaskError,
        getTasksFn,
        addTaskFn,
        showFormErrorFn
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
