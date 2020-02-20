import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
//
const NewProject = () => {
  //
  //man har tillgänglit till alla ProjectState igenom context
  const newProjectContext = useContext(projectContext);
  //const {showForm}
  //
  //local state
  const [project, setProject] = useState({
    projectname: ''
  });
  const { projectname } = project;

  const handleChange = e => {
    e.preventDefault();
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //validar form

    //enviar datos de project al setState de context

    //reincoar el form
  };
  return (
    <Fragment>
      <button type='button' className='btn btn-block btn-primary mb-5'>
        Create New Project
      </button>
      <form onSubmit={handleSubmit}>
        <input
          className='form-control'
          type='text'
          placeholder='Project name'
          name='projectname'
          value={projectname}
          onChange={handleChange}
        />
        <input type='submit' className='btn btn-sm btn-primary' value='Add' />
      </form>
    </Fragment>
  );
};

export default NewProject;
