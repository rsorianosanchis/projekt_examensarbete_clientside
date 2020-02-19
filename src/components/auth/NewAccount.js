import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//
const NewAccount = () => {
  //local state
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const { username, email, password, password2 } = user;
  //

  const handleChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //validation no mellan rum

    //control password min 6 char

    // password equal

    //action
  };

  return (
    <div>
      <h1>Create an user account</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='exampleInputName'>User Name</label>
          <input
            type='text'
            className='form-control'
            id='exampleInputName'
            aria-describedby='nameHelp'
            name='username'
            placeholder='Your name'
            onChange={handleChange}
            value={username}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            name='email'
            placeholder='ex. hej@mytasks.com'
            onChange={handleChange}
            value={email}
          />
          <small id='emailHelp' className='form-text text-muted'>
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            name='password'
            placeholder='Insert your password'
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='exampleInputPassword2'>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword2'
            name='password2'
            placeholder='Confirm your password'
            onChange={handleChange}
            value={password2}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <Link to={'/'} className='nav-link'>
        Back to LogIn
      </Link>
    </div>
  );
};

export default NewAccount;
