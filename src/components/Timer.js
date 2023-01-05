import React, { useState, useEffect }  from 'react';

let seconds;
let minutes;

const Timer = () => {
  const [time, setTime] = useState(Date.now());
  console.log(time)


  useEffect(()=> {
    const interval = setInterval(
      () => setTime(Date.now())
      , 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='timer'>
      {
       `${Math.floor(time/1000/60)%60}:${Math.floor(time/1000)%60}`.padStart(2,"0")
      } 
    </div>
  )
}

export default Timer;