import React from 'react';

const Task = ({ task }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <p className='m-0 flex-grow-1'>{task.taskName}</p>

      {task.state ? (
        <button type='button' className='btn btn-sm btn-success'>
          Complete
        </button>
      ) : (
        <button type='button' className='btn btn-sm btn-danger'>
          Incomplete
        </button>
      )}
      <button type='button' className='btn btn-sm btn-warning mx-1'>
        Edit
      </button>
      <button type='button' className='btn btn-sm btn-danger'>
        &times;
      </button>
    </li>
  );
};

export default Task;
