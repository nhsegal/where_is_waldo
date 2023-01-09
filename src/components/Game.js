import backgroundImg from "../imgs/where_is_waldo.jpeg";
import "./Game.css";
import { checkForWaldo, checkForWin } from "../helpers/checkForSuccess";
import DropdownForLabeling from "./DropdownForLabeling";
import React, { useState, useEffect } from "react";
import Stopwatch from "./Stopwatch";
import { collection, getDocs } from "firebase/firestore";
import { app, database } from "../firebase";
import CharacterKey from "./CharacterKey";

function Game() {
  const [gameState, setGameState] = useState({
    waldoFound: false,
    odlawFound: false,
    wizardFound: false,
  });

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuView, setMenuView] = useState("none");
  const [menuOption, setMenuOption] = useState("");
  const [targetInfo, updateTargetInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(database, "waldoKey"));
      return data.docs;
    };

    fetchData().then((docs) => {
      docs.forEach((doc) => {
        updateTargetInfo((targetInfo) => [...targetInfo, doc.data()]);
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
    }

    if (checkForWaldo) {
      
    }
  }, [gameState]);



  return (
    <div className="container">
      <div className="headers">
        <CharacterKey   gameState={gameState}></CharacterKey>
        <button>Exit Game</button>
        <Stopwatch></Stopwatch>
      </div>
      <img
        src={backgroundImg}
        alt="Waldo at the beach"
        onClick={displayMenu}
        className="background-img"
      />
      <DropdownForLabeling
        menuPosition={menuPosition}
        menuView={menuView}
        menuOption={menuOption}
        setMenuOption={setMenuOption}
        setGameState={setGameState}
        gameState={gameState}
        targetInfo={targetInfo}></DropdownForLabeling>
    </div>
  );
}

export default Game;
