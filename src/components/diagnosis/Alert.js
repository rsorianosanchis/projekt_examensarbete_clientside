import React from 'react';

const Alert = ({ msg, cat }) => {
  if (cat === 'danger') {
    return (
      <div className='alert alert-danger' role='alert'>
        {msg}
      </div>
    );
  }

  return (
    <div className='alert alert-warning' role='alert'>
      {msg}
    </div>
  );
};

export default Alert;
