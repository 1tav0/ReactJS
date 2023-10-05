import React from 'react'
import './Note.css';
const Note = (props) => {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className='note__wrapper'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  )
}

export default Note