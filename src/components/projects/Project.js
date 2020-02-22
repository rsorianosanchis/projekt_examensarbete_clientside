import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({ project }) => {
  const p_context = useContext(projectContext);
  const { selectProjectFn } = p_context;
  //
  const t_context = useContext(taskContext);
  const { getTasksFn } = t_context;

  const handleClick = e => {
    e.preventDefault();
    selectProjectFn(project);
    getTasksFn(project.id);
  };

  return (
    <li className='list-group-item'>
      <button
        type='button'
        className='btn btn-sm btn-info'
        onClick={handleClick}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
