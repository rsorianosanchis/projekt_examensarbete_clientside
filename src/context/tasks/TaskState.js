import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import uuid from 'uuid';
import {
  GET_TASKS_OF_PROJECT,
  ADD_TASK,
  SHOW_NEW_TASK_FORM_ERROR,
  DELETE_TASK
} from '../../types/types';

const TaskState = props => {
  const initialState = {
    tasks: [],
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
    task.id = uuid.v4();
    dispatch({
      type: ADD_TASK,
      payload: task
    });
  };
  //
  // error om new task tom field
  const showFormErrorFn = () => {
    dispatch({
      type: SHOW_NEW_TASK_FORM_ERROR
    });
  };
  //DELETE task by id,
  const deleteTaskFn = taskId => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    });
  };

  return (
    <taskContext.Provider
      value={{
        projectTasks: state.projectTasks,
        showFormNewTaskError: state.showFormNewTaskError,
        getTasksFn,
        addTaskFn,
        deleteTaskFn,
        showFormErrorFn
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
