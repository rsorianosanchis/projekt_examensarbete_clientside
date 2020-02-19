import React from 'react';
import SideBar from '../layout/SideBar';

const Projects = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <aside className='col-4 m-0 p-0'>
          <SideBar />
        </aside>
        <main className='col-8'>
          <h2>main area</h2>
        </main>
      </div>
    </div>
  );
};

export default Projects;
