import React from 'react'
import './Login.css'
import Form from './Form';
const Login = () => {
  var returningUser = true;

  return (
    <div className='login__wrapper'>
      {<Form flag={returningUser} />}
    </div>
  )
}

export default Login