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
  function handleClick(event) {
    setHeading(name);

    event.preventDefault();
  }
  
  return (
    <div className='container'>
      <h1>Hello {heading}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          value={name}
          type="text" placeholder="What's your name?" />
        <button
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EvenHandling