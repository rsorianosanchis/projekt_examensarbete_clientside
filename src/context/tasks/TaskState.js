import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import { GET_TASKS_OF_PROJECT } from '../../types/types';

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
    projectTasks: []
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

  return (
    <taskContext.Provider
      value={{
        projectTasks: state.projectTasks,
        getTasksFn
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
