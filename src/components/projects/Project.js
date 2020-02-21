import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {
  const { selectProjectFn } = useContext(projectContext);

  const handleClick = e => {
    e.preventDefault();
    selectProjectFn(project);
    console.log(project.id);
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
