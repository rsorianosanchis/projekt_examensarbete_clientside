import React from 'react';
import Task from './Task';

const ListTasks = () => {
  const projectTasks = [
    { taskName: 'Tomates', state: true },
    { taskName: 'Bread', state: true },
    { taskName: 'Fisk', state: false },
    { taskName: 'Potatis', state: true }
  ];
  return (
    <div className='card mx-3'>
      <div className='card-header'>Project: Mat vagn</div>
      <ul className='list-group list-group-flush'>
        {/* <li className='list-group-item'>Cras justo odio</li>
        <li className='list-group-item'>Dapibus ac facilisis in</li>
        <li className='list-group-item'>Vestibulum at eros</li> */}
        {projectTasks.length === 0 ? (
          <li className='list-group-item bg-info'>
            There is not tasks for this project
          </li>
        ) : (
          projectTasks.map(task => <Task key={task.taskName} task={task} />)
        )}
      </ul>
      <div className='card-footer mt-0 d-flex justify-content-center'>
        <button type='button' className='btn btn-sm btn-danger'>
          Delete Project
        </button>
      </div>
    </div>
  );
};

export default ListTasks;
