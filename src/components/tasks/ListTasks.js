import React, { useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const ListTasks = () => {
  const p_context = useContext(projectContext);
  const { selectedProject, deleteProjectFn } = p_context;
  //
  const t_context = useContext(taskContext);
  const { projectTasks } = t_context;
  //
  if (selectedProject === null) {
    return null;
  }

  const handleClick = e => {
    e.preventDefault();
    //delete actual project
    deleteProjectFn(selectedProject);
  };

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
          projectTasks.map(task => <Task key={task.id} task={task} />)
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
