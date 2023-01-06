import React, { useState, useEffect }  from 'react';
import "./Timer.css";

const start = Date.now();

const Timer = () => {
  const [time, setTime] = useState(Date.now());
 
  useEffect(()=> {
    const interval = setInterval(
      () => setTime(Date.now())
      , 1000);
    return () => clearInterval(interval);
  }, []);

  let seconds = (Math.floor((time-start)/1000)%60).toString();
  if (seconds.length<2) {
    seconds= '0'+seconds
   
  }
 
  return (
    <div className='timer'>
      {
       `${Math.floor((time-start)/1000/60)%60}:${seconds}`
      } 
    </div>
  )
}

export default Timer;