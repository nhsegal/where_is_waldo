import backgroundImg from "../imgs/where_is_waldo.jpeg";
import "./Game.css";
import { checkForWin } from "../helpers/checkForSuccess";
import DropdownForLabeling from "./DropdownForLabeling";
import React, { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";
import { collection, getDocs } from "firebase/firestore";
import { app, database } from "../firebase";
import CharacterKey from "./CharacterKey";
import Marker from "./Marker";
import Modal from "./Modal";
import timeToNumber from "../helpers/timeToNumber";

function Game(props) {
  const [gameState, setGameState] = useState({
    waldoFound: false,
    odlawFound: false,
    wizardFound: false,
  });

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuView, setMenuView] = useState("none");
  const [menuOption, setMenuOption] = useState("");
  const [targetInfo, setTargetInfo] = useState([]);
  const [endTime, setEndTime] = useState(0);
  const [fast, setFast] = useState(false)

  const bestTimes = props.bestTimes


 

  // Get Waldo et al coordinates
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(database, "waldoKey"));
      return data.docs;
    };

    fetchData().then((docs) => {
      docs.forEach((doc) => {
        setTargetInfo((targetInfo) => [...targetInfo, doc.data()]);
      });
    });
  }, []);


  const displayMenu = (event) => {
    setMenuPosition({
      x: event.pageX,
      y: event.pageY,
    });
    setMenuView("flex");
  };

  useEffect(() => {
    if (checkForWin(gameState)) {
      console.log("GAME OVER");
      const worstBestTime = timeToNumber(bestTimes[4].time);
      const endTimeNum = timeToNumber(endTime)
      if (endTimeNum < worstBestTime){
        console.log('that is fast')
        setFast(()=>true);
      }

    }
  }, [endTime]);

  return (
    <div className="container">
      <div className="headers">
        <CharacterKey   gameState={gameState}></CharacterKey>
        <button>Exit Game</button>
        <Stopwatch gameState = {gameState} setEndTime ={setEndTime}></Stopwatch>
      </div>
      <img
        src={backgroundImg}
        alt="Waldo at the beach"
        onClick={displayMenu}
        className="background-img"
      />
       { (gameState.waldoFound) &&
          <Marker markerPosition={menuPosition}></Marker>
        }

{ (gameState.odlawFound) &&
          <Marker markerPosition={menuPosition}></Marker>
        }
        
        { (gameState.wizardFound) &&
          <Marker markerPosition={menuPosition}></Marker>
        }
      <DropdownForLabeling
        menuPosition={menuPosition}
        menuView={menuView}
        menuOption={menuOption}
        setMenuOption={setMenuOption}
        setGameState={setGameState}
        gameState={gameState}
        targetInfo={targetInfo}></DropdownForLabeling>
      { checkForWin(gameState) &&
        <Modal fast = {fast}></Modal>
      }  
    </div>
  );
}

export default Game;
