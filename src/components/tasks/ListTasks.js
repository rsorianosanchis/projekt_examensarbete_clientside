import React, { useContext, useEffect } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const ListTasks = () => {
  const project = useContext(projectContext);
  const { selectedProject, deleteProjectFn, getProjectsFn } = project;
  console.log(selectedProject);

  if (selectedProject === null) {
    return null;
  }
  const projectTasks = [
    { taskName: 'Tomates', state: true },
    { taskName: 'Bread', state: true },
    { taskName: 'Fisk', state: false },
    { taskName: 'Potatis', state: true }
  ];

  const handleClick = e => {
    e.preventDefault();
    //delete actual project
    deleteProjectFn(selectedProject);
  };

  // useEffect(() => {
  //   //gettasks från db med selectedProject uppgiftern
  // });

  return (
    <div className='card mx-3'>
      <div className='card-header'>
        Project:{' '}
        <span className='font-weight-bold'>{selectedProject.name}</span>
      </div>
      <ul className='list-group list-group-flush'>
        {projectTasks.length === 0 ? (
          <li className='list-group-item bg-info'>
            There is not tasks for this project
          </li>
        ) : (
          projectTasks.map(task => <Task key={task.taskName} task={task} />)
        )}
      </ul>
      <div className='card-footer mt-0 d-flex justify-content-center'>
        <button
          type='button'
          className='btn btn-sm btn-danger'
          onClick={handleClick}
        >
          Delete Project
        </button>
      </div>
    </div>
  );
};

export default ListTasks;
