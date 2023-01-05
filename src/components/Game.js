import React, { useRef, useState, useEffect } from "react";
import photo from "../imgs/where_is_waldo.jpeg";
//import {  collection, addDoc, query, getDocs, QuerySnapshot, doc  } from "firebase/firestore"
//import { app, database } from '../firebase'
//import FaceTag from "./FaceTag";
import "./Game.css";
import Timer from "./Timer";


function Game() {
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
    console.log(event.target)
    console.log(event.pageX)


    /*
    isSelected.current.forEach( (ent,ind,arr)=> {
      arr[ind].classList.add('unselected');
      arr[ind].classList.remove('selected');
    })
    isSelected.current[i].firstChild.focus();
    isSelected.current[i].classList.add('selected');
    isSelected.current[i].classList.remove('unselected');
    */
  };

  return (
    <div className={"container"}>
      <div className='headers'>
       <div>Score: </div>  
       <div>Time: </div>   
       <Timer></Timer>   
      </div>
      <img src={photo} alt="Waldo at the beach" onClick={displayMenu} />
    </div>
  );
}

export default Game;
