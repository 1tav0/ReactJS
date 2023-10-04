import React, { useState } from 'react'
import './EvenHandling.css'

const EvenHandling = () => {

  const [name, setName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setName(event.target.value);
  }

  const [heading, setHeading] = useState("");
  function handleClick() {
    setHeading(name);
  }
  
  return (
    <div className='container'>
      <h1>Hello {heading}</h1>
      <input
        onChange={handleChange}
        value={name}
        type="text" placeholder="What's your name?" />
      <button
        onClick = {handleClick}
      >Submit</button>
    </div>
  )
}

export default EvenHandling