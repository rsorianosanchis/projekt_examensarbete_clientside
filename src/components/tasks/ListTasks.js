import React from 'react';
import Task from './Task';

const ListTasks = () => {
  const projectTasks = [
    { taskname: 'Tomates', state: true },
    { taskname: 'Bread', state: true },
    { taskname: 'Fisk', state: false },
    { taskname: 'Potatis', state: true }
  ];
  return (
    <div className='card mx-3'>
      <div className='card-header'>Project: Mat vagn</div>
      <ul className='list-group list-group-flush'>
        {/* <li className='list-group-item'>Cras justo odio</li>
        <li className='list-group-item'>Dapibus ac facilisis in</li>
        <li className='list-group-item'>Vestibulum at eros</li> */}
        {projectTasks.length === 0 ? (
          <li className='list-group-item-info'>
            There is not tasks for this project
          </li>
        ) : (
          projectTasks.map(task => <Task key={task.taskname} task={task} />)
        )}
      </ul>
    </div>
  );
};

export default ListTasks;
