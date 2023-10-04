import React, { useState } from 'react'
import './EvenHandling.css'

const EvenHandling = () => {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  
  function handleChange(event) {

    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })

  }


  
  return (
    <div className='container'>
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form className='form'>
        <input
          name="fName"
          type="text" placeholder="First name?"
          value={fullName.fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          type="text" placeholder="First name?"
          value={fullName.lName}
          onChange={handleChange}
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