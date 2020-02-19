import React from 'react';
import NewProject from '../projects/NewProject';

const SideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-start sidebar p-3 align-items-center'>
      <div className='flex-grow-1'>
        <h3 className='font-weight-bold'>
          Area A <span className=' font-weight-light'> Application</span>
        </h3>
        <NewProject />
      </div>
      <div className=' flex-grow-1'>
        <h3>Area B</h3>
      </div>
      <div className=' flex-grow-1'></div>
    </div>
  );
};

export default SideBar;