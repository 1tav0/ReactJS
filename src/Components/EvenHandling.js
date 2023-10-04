import React, { useState } from 'react'
import './EvenHandling.css'

const EvenHandling = () => {

  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setfName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setlName(lastName);
  }

  
  return (
    <div className='container'>
      <h1>Hello {fName} {lName}</h1>
      <form className='form'>
        <input
          name="fName"
          type="text" placeholder="First name?"
          value={fName}
          onChange={updateFName}
        />
        <input
          name="fName"
          type="text" placeholder="First name?"
          value={lName}
          onChange={updateLName}
        />
        <button
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EvenHandling