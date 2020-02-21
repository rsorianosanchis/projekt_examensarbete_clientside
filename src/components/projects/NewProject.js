import React, { Fragment, useState, useContext } from 'react';
import Alert from '../diagnosis/Alert';
import projectContext from '../../context/projects/projectContext';
//
const NewProject = () => {
  //
  //man har tillgänglit till alla ProjectState igenom context
  const newProjectContext = useContext(projectContext);
  const {
    showFormNewProjectError,
    showForm,
    setShowFormFn,
    addNewProjectFn,
    showFormErrorFn
  } = newProjectContext; // show/hide förmulär när click
  //
  //local state
  const [project, setProject] = useState({
    name: ''
  });

  const { name } = project;
  //
  const handleClick = e => {
    e.preventDefault();
    setShowFormFn();
  };

  const handleChange = e => {
    e.preventDefault();
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //validar form
    if (name.trim() === '') {
      showFormErrorFn();
      return;
    }

    //enviar datos de project al setState de context
    addNewProjectFn(project);
    //reincoar el form
    setProject({
      name: ''
    });
  };
  return (
    <Fragment>
      {showFormNewProjectError ? (
        <Alert msg='Field project name is obligatory' />
      ) : null}
      <button
        type='button'
        className='btn btn-block btn-primary mb-5'
        onClick={handleClick}
      >
        Create New Project
      </button>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input
            className='form-control'
            type='text'
            placeholder='Project name'
            name='name'
            value={name}
            onChange={handleChange}
          />
          <input type='submit' className='btn btn-sm btn-primary' value='Add' />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
