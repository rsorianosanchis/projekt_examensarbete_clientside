import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';

const Task = ({ task }) => {
  const t_context = useContext(taskContext);
  const {
    deleteTaskFn,
    getTasksFn,
    changeTaskStateFn,
    getSelectedTaskFn
  } = t_context;

  const handleDelete = e => {
    e.preventDefault();
    // alert(task.id);
    deleteTaskFn(task.id);
    getTasksFn(task.projectId);
  };
  const handleState = e => {
    e.preventDefault();
    changeTaskStateFn(task.id);
    getTasksFn(task.projectId);
  };
  const handleEdit = e => {
    e.preventDefault();
    getSelectedTaskFn(task);
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <p className='m-0 flex-grow-1'>{task.name}</p>

      {task.state ? (
        <button
          type='button'
          className='btn btn-sm btn-success'
          onClick={handleState}
        >
          Complete
        </button>
      ) : (
        <button
          type='button'
          className='btn btn-sm btn-danger'
          onClick={handleState}
        >
          Incomplete
        </button>
      )}
      <button
        type='button'
        className='btn btn-sm btn-warning mx-1'
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        type='button'
        className='btn btn-sm btn-danger'
        onClick={handleDelete}
      >
        &times;
      </button>
    </li>
  );
};

export default Task;
