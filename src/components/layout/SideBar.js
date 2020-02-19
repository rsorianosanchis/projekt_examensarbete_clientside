import React, { Fragment } from 'react';

const SideBar = () => {
  return (
    <div className='d-flex flex-column justify-content-start sidebar m-0'>
      <div className='bg-color1 flex-grow-1'>
        <h3>Area A</h3>
      </div>
      <div className='bg-color1 flex-grow-1'>
        <h3>Area B</h3>
      </div>
    </div>
  );
};

export default SideBar;
