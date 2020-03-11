import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//
const Login = () => {
  //local state
  const [user, setUser] = useState({ email: '', password: '' });
  const { email, password } = user;
  //

  const handleChange = e => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    //validation

    //action
  };

  return (
    <div className='container px-5'>
      <form
        onSubmit={handleSubmit}
        className='d-flex flex-column justify-content-start align-content-center mx-5'
      >
        <h1>Log in</h1>
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
        <button type='submit' className='btn btn-primary'>
          Sign in
        </button>
      </form>
      <Link to={'/new-account'} className='nav-link'>
        Get account
      </Link>
    </div>
  );
};

export default Login;
