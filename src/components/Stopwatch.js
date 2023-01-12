import React, { useState, useEffect } from "react";
import './Stopwatch.css'
import { checkForWin } from "../helpers/checkForSuccess";

const Stopwatch = (props) => { 
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  useEffect(()=> {
    if (checkForWin(props.gameState)){
      setRunning(()=>false)
      const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
      const sec = ("0" +  Math.floor((time / 1000) % 60)).slice(-2);
      const dec = ("0" + ((time / 10) % 100)).slice(-2);
      //console.log(`${min}:${sec}.${dec}`)
      props.setEndTime(()=>`${min}:${sec}:${dec}`)
    }

  }, [props.gameState])

  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" +  Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      {
        /*
             <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>       
      </div>
        */
      }
 
    </div>
  );
};
export default Stopwatch;