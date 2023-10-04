import React, { useState } from 'react'

const StateHooks2 = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function getNewTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  }

  // setInterval(getNewTime, 1000);
  
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={getNewTime}>Get time</button>
    </div>
  )
}

export default StateHooks2