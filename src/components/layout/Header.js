import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <p className='navbar-brand py-0 my-0'>
        Hej <span className='font-weight-bold'>User Name</span>
      </p>
      <a href='#!' className='btn btn-sm btn-outline-info my-2 my-sm-0'>
        Log Out
      </a>
    </nav>
  );
};

export default Header;
