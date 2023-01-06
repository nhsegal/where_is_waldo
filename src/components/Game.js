import React, { useRef, useState, useEffect, createRef } from "react";
import photo from "../imgs/where_is_waldo.jpeg";

import {
  collection,
  addDoc,
  query,
  getDocs,
  QuerySnapshot,
  doc,
} from "firebase/firestore";
import { app, database } from "../firebase";
import DropdownForLabeling from "./DropdownForLabeling";
import "./Game.css";
import Timer from "./Timer";
import CharacterKey from "./CharacterKey";

const menuRef = createRef();
const winningInfo = []


function Game() {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [menuView, setMenuView] = useState("none");
  const [menuOption, setMenuOption] = useState("");
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(database, "waldoKey"));
      return data.docs;
    };

    fetchData().then((docs) =>
      docs.forEach((doc) => {
        if (doc.data().Name === "waldo") {
          console.log("here");
        }
        winningInfo.push(doc.data())
        console.log(doc.data());
      })
    );
  }, []);

  const displayMenu = (event) => {
    console.log(
     winningInfo
    );

    setMenuPosition({
      x: event.pageX,
      y: event.pageY,
    });

    setMenuView("flex");

    setMenuOption("");
  };

  const checkForSuccess = (e) => {
    winningInfo.forEach(
      
     )
  }

  return (
    <div className="container">
      <div className="headers">
        <CharacterKey></CharacterKey>
        <button>Exit Game</button>
        <Timer></Timer>
      </div>
      <img
        src={photo}
        alt="Waldo at the beach"
        onClick={displayMenu}
        className="background-img"
      />
      <DropdownForLabeling
        menuPosition={menuPosition}
        menuView={menuView}
        menuOption={menuOption}></DropdownForLabeling>
    </div>
  );
}

export default Game;
