import React from 'react'

const InStyle = () => {
  const name = "Tavo";
  const date = new Date(2023,10,2,10);
  const currentTime = date.getHours();

  let greeting;
  const customStyle = {
    color: ""
  }
  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }


  return (
    <div className="app">
      <h1 style={customStyle}>{greeting}</h1>
    </div>
  );
}

export default InStyle