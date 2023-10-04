import React, { useState } from 'react'
import './EvenHandling.css'

const EvenHandling = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })

  function handleChange(event) {
    const { value, name } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name] : value
      }
    })
  }
  
  return (
    <div className='container'>
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form className='form'>
        <input
          name="fName"
          type="text" placeholder="First Name?"
          onChange={handleChange}
          value={contact.fName}
        />
        <input
          name = "lName"
          type="text" placeholder="Last Name?"
          onChange={handleChange}
          value={contact.lName}
        />
        <input
          name = "email"
          type="text" placeholder="Email"
          onChange={handleChange}
          value={contact.email}
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