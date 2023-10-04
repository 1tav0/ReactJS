import React from 'react'

const State = () => {
  var isDone = true;

  const strikeThrough = { textDecoration: "line-through"}
  return (
    <p style={isDone ? strikeThrough : null}>Buy Milk</p>
  )
}

export default State