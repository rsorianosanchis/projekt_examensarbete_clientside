import React from 'react';
import NewProject from '../projects/NewProject';
import ListProjects from '../projects/ListProjects';

const SideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-start p-3 align-items-center'>
      <h3 className='font-weight-bold text-center'>
        My Tasks <small className='font-weight-light'> Application</small>
      </h3>
      <NewProject />

      <ListProjects />
    </div>
  );
};

export default SideBar;
