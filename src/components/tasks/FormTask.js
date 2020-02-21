import React, { useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import Alert from '../diagnosis/Alert';

const FormTask = () => {
  //
  const [taskname, setTaskName] = useState('');
  const project = useContext(projectContext);
  const { selectedProject } = project;

  const handleChange = e => {
    e.preventDefault();
    setTaskName(...taskname);
    setTaskName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log('submit');
  };
  //
  return (
    <div className='mx-3 mt-4 '>
      {selectedProject === null ? (
        <Alert msg='Select some project on sidebar' />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='input-group mb-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Task name...'
              name='taskname'
              value={taskname}
              onChange={handleChange}
            />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='submit'>
                Add
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormTask;
