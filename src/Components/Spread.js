import React, { useState } from 'react'
import TodoItem from './TodoItem';
import InputArea from './InputArea';
const Spread = () => {
  const [items, setItems] = useState([]);


  function addItem(inputText) {
    setItems((prevItems) => { 
      //we return a new array with the previous items and what we have in the input from the user
      return [...prevItems, inputText]
    })

    //to clear what we type
    
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
        <InputArea
          onAdd={addItem}
        />
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