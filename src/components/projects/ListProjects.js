import React from 'react';
import Project from './Project';

const ListProjects = () => {
  const projects = [
    { name: 'myprojecttest1' },
    { name: 'myprojecttest2' },
    { name: 'myprojecttest3' }
  ];
  return (
    <div>
      <ul className='list-group'>
        {projects.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ListProjects;
