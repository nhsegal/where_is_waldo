import React, { useState, useEffect } from "react";
import './Stopwatch.css'
import { checkForWin } from "../helpers/checkForSuccess";

const Stopwatch = (props) => { 
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(props.start);
  
  useEffect(()=>{
    setRunning(props.start)
  },[props.start])

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

 
    </div>
  );
};
export default Stopwatch;