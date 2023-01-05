import React, { useRef, useState, useEffect, createRef } from "react";
import photo from "../imgs/where_is_waldo.jpeg";



//import {  collection, addDoc, query, getDocs, QuerySnapshot, doc  } from "firebase/firestore"
//import { app, database } from '../firebase'
import DropdownForLabeling from "./DropdownForLabeling";
import "./Game.css";
import Timer from "./Timer";
import CharacterKey from "./CharacterKey";

const menuRef = createRef()

function Game() {
  const [menuPosition, setMenuPosition] = useState({x:0, y:0})
/*
  const isSelected = useRef([]);
  useEffect(()=>{
    const fetchData = async () => {
      const data = await getDocs(collection(database, "entries"));
      console.log(data)
      return data.docs
    }
  
    fetchData().then( (e) => e.forEach(doc=>console.log(doc.data().entry))).catch(console.error);
    
  }, [])

*/
  const displayMenu = (event) => {   

   setMenuPosition({
    x: event.pageX,
    y: event.pageY
   })
    
  };

  return (
    <div className="container">
      <div className='headers'> 
      <CharacterKey></CharacterKey> 
      <button>Exit Game</button>
       <Timer></Timer>  

      </div>
      <img src={photo} alt="Waldo at the beach" onClick={displayMenu} className='background-img'/>
      <DropdownForLabeling menuPosition = {menuPosition}></DropdownForLabeling>
    </div>
  );
}

export default Game;
