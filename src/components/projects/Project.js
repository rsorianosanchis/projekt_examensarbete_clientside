import React from 'react';

const Project = ({ project }) => {
  return (
    <li className='list-group-item'>
      <button type='button' className='btn btn-sm btn-info'>
        {project.name}
      </button>
    </li>
  );
};

export default Project;
