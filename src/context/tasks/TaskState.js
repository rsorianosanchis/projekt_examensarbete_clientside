import React, { useReducer } from 'react';
import taskContext from './taskContext';
import taskReducer from './taskReducer';

const TaskState = props => {
  const initialState = {
    tasks: []
  };

  //state dispatch declaration
  const [state, disptach] = useReducer(taskReducer, initialState);

  return <taskContext.Provider>{props.children}</taskContext.Provider>;
};

export default TaskState;
