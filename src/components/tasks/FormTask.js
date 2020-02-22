import React, { useState, useContext, useEffect } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import Alert from '../diagnosis/Alert';

const FormTask = () => {
  //
  const [taskname, setTaskName] = useState({ name: '' });
  const { name } = taskname;
  const p_context = useContext(projectContext);
  const { selectedProject } = p_context;
  //
  const t_context = useContext(taskContext);
  const {
    showFormNewTaskError,
    addTaskFn,
    showFormErrorFn,
    getTasksFn,
    selectedTask,
    editTaskFn
  } = t_context;

  useEffect(() => {
    if (selectedTask !== null) {
      setTaskName(selectedTask);
    } else {
      setTaskName({ name: '' });
    }
  }, [selectedTask]);
  //{ taskName: 'Potatasdis', state: true, projectId: 3 }
  const handleChange = e => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setTaskName({ ...taskname, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //validation
    if (name.trim() === '') {
      showFormErrorFn();
      return;
    }

    //kontroll  skapa eller  redigera
    if (selectedTask === null) {
      //ny task
      addTaskFn({
        name: name,
        state: false,
        projectId: selectedProject.id
      });
    } else {
      editTaskFn({
        id: selectedTask.id,
        name: name,
        state: selectedTask.state,
        projectId: selectedProject.id
      });
    }

    getTasksFn(selectedProject.id);
    setTaskName({ name: '' });
  };
  //
  return (
    <div className='mx-3 mt-4 '>
      {showFormNewTaskError ? (
        <Alert msg='Man måste skriva ett nammn till task' />
      ) : null}
      {selectedProject === null ? (
        <Alert msg='Select some project on sidebar' />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='input-group mb-3'>
            <input
              className='form-control'
              type='text'
              placeholder='Task name...'
              name='name'
              value={name}
              onChange={handleChange}
            />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='submit'>
                {selectedTask === null ? 'Add' : 'Edit'}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormTask;
