import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ListProjects = () => {
  //
  const listProjectsContext = useContext(projectContext);
  const { projects, getProjectsFn } = listProjectsContext;
  //
  useEffect(() => {
    // fetch db to get projects
    //
    //aqui caragaremos parametr
    //getProjectsFn(response);
    getProjectsFn();
  }, []);

  if (projects.length === 0) {
    return <p>Not projects created.</p>;
  }

  return (
    <div>
      <h3>Your projects</h3>
      <ul className='list-group'>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ListProjects;
