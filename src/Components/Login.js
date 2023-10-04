import React from 'react'
import './Login.css'
import Form from './Form';
const Login = () => {
  var isLoggedIn = true;

  return (
    <div className='login__wrapper'>
      {<Form flag={isLoggedIn} />}
    </div>
  )
}

export default Login