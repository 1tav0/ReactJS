import React from 'react'
/***DECLARITIVE***/
/*
const State = () => {
  var isDone = false;

  const strikeThrough = { textDecoration: "line-through"}
  return (
    <p style={isDone ? strikeThrough : null}>Buy Milk</p>
  )
}
*/
/***IMPERATIVE***/
const State = () => {
  function strike() {
    document.getElementById("root").style.textDecoration = 'line-through';
  }

  function unStrike() {
    document.getElementById("root").style.textDecoration = null;
  }

  const strikeThrough = { textDecoration: "line-through"}
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  )
}

export default State