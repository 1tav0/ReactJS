import React from 'react'

const Form = (props) => {
  return (
    <form className="login__child">
      <input type="text" placeholder='Username'/>
      <input type="text" placeholder='Password' />
      {!props.flag && <input type="text" placeholder='Register'/>}
      <button className='login' type="submit"> {props.flag === true ? "Login" : "Register"}</button>
    </form>
  )
}

export default Form