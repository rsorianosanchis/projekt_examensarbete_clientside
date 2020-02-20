import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import FormTask from '../tasks/FormTask';
import ListTasks from '../tasks/ListTasks';

const DashPanel = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <aside className='col-4 m-0 p-0'>
          <SideBar />
        </aside>
        <main className='col-8 d-flex flex-column mx-0 px-0'>
          <Header />
          <FormTask />
          <ListTasks />
        </main>
      </div>
    </div>
  );
};

export default DashPanel;
