import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import uuid from 'uuid';
import {
  GET_TASKS_OF_PROJECT,
  ADD_TASK,
  SHOW_NEW_TASK_FORM_ERROR,
  DELETE_TASK,
  TASK_STATE,
  SELECTED_TASK_TO_EDIT,
  EDIT_TASK
} from '../../types/types';

const TaskState = props => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Tomates', state: true, projectId: 1 },
      { id: 2, name: 'Bread', state: true, projectId: 2 },
      { id: 3, name: 'Fisk', state: false, projectId: 3 },
      { id: 4, name: 'kiwi', state: true, projectId: 4 },
      { id: 5, name: 'hh', state: true, projectId: 1 },
      { id: 6, name: 'Breallld', state: true, projectId: 2 },
      { id: 7, name: 'Fasdisk', state: false, projectId: 2 },
      { id: 8, name: 'Potatasdis', state: true, projectId: 3 }
    ],
    projectTasks: null,
    getProjectTask: null,
    showFormNewTaskError: false,
    selectedTask: null
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
  //hitta selected task by id, ändra state
  const changeTaskStateFn = taskId => {
    dispatch({
      type: TASK_STATE,
      payload: taskId
    });
  };
  //get complete task när man clika på edit
  const getSelectedTaskFn = task => {
    dispatch({
      type: SELECTED_TASK_TO_EDIT,
      payload: task
    });
  };
  //get task redigerat och update tasks i reducer
  const editTaskFn = task => {
    dispatch({
      type: EDIT_TASK,
      payload: task
    });
  };

  return (
    <taskContext.Provider
      value={{
        projectTasks: state.projectTasks,
        showFormNewTaskError: state.showFormNewTaskError,
        selectedTask: state.selectedTask,
        getTasksFn,
        addTaskFn,
        deleteTaskFn,
        showFormErrorFn,
        changeTaskStateFn,
        getSelectedTaskFn,
        editTaskFn
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
