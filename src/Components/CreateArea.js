import React, { useState } from 'react'
import './CreateArea.css'
const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote, 
        [name]: value
      }
    })
  }

  function submitNote(event) {
    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div className='createArea__wrapper'>
      <form>
        <input name="title" placeholder='Title' value={note.title}
        onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder='Take a note...'
          cols="55" rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea