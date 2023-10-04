import React from 'react'

const Spread = () => {
  const citrus = ["lime", "lemon", "orange"];
  //const fruits = ["apple", "Banana", "coconut", ...citrus];
  //['apple', 'Banana', 'coconut', 'lime', 'lemon', 'orange']
  const fruits = ["apple", ...citrus, "Banana", "coconut"];
  //['apple', 'lime', 'lemon', 'orange', 'Banana', 'coconut']
  

  const fullName = {
    fName: "James",
    lName: "Bond"
  };

  const user = {
    ...fullName,
    id: 1,
    userName: "007"
  }
  //{fName: 'James', lName: 'Bond', id: 1, userName: '007'}

  console.log(user)

  return (
    <div>Spread</div>
  )
}

export default Spread