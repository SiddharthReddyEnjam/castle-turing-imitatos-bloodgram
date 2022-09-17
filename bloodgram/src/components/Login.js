import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='login-page'>
      <h1>Welcome to Bloodgram</h1>
      <div className='login'>
        <div className='login-title'>
          <h2>Login to continue</h2>
        </div>
        <form className='login-form'>
          <input type='text' placeholder='Email / Phone' className='area' />
          <input type='password' placeholder='Password' />
        </form>
        <div className='buttons'>
          <div className='login-signup'>
            <button className='l-btn login-btn'>Login</button>
            <button className='l-btn signup-btn'>Signup</button>
          </div>
          <div className='reset'>
            <p>Forgot your password?</p>
            <button className='l-btn reset-btn'>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
