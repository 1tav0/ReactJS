import React, { useState } from 'react'
import TodoItem from './TodoItem';
const Spread = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => { 
      //we return a new array with the previous items and what we have in the input from the user
      return [...prevItems, inputText]
    })

    //to clear what we type
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          value={inputText}
        />
        <button
          onClick={addItem}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((newItem,index) => (<TodoItem
            text={newItem}
            onChecked={deleteItem}
            key={index}
            id={index}
          />))}
        </ul>
      </div>
    </div>
  )
}

export default Spread