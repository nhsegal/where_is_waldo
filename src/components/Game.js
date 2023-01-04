import React, { useRef, useState, useEffect } from "react";
import photo from "../imgs/solvayphoto.jpeg";
import {  collection, addDoc, query, getDocs, QuerySnapshot, doc  } from "firebase/firestore"
import { app, database } from '../firebase'
import FaceTag from "./FaceTag";
import "./Game.css";

const photoKey = [
  {
    coordinates: "325,145,40",
    name: "Auguste Piccard",
  },
  {
    coordinates: "438,173,40",
    name: "Émile Henriot",
  },
  {
    coordinates: "520,208,40",
    name: "Paul Ehrenfest",
  },
  {
    coordinates: "654,192,40",
    name: "Édouard Herzen",
  },
  {
    coordinates: "790,208,40",
    name: "Théophile de Donder",
  },
  {
    coordinates: "914,180,40",
    name: "Erwin Schrödinger",
  },
  {
    coordinates: "1024,180,40",
    name: "Jules-Émile Verschaffelt",
  },
  {
    coordinates: "1138,180,40",
    name: "Wolfgang Pauli",
  },
  {
    coordinates: "1260,170,40",
    name: "Werner Heisenberg",
  },
  //-----------
  {
    coordinates: "1338,130,40",
    name: "Ralph Howard Fowler",
  },
  {
    coordinates: "1400,173,40",
    name: "Léon Brillouin",
  },

  {
    coordinates: "154,287,40",
    name: "Peter Debye",
  },
  {
    coordinates: "297,294,40",
    name: "Martin Knudsen",
  },
  {
    coordinates: "448,288,40",
    name: "William Lawrence Bragg",
  },
  {
    coordinates: "616,288,40",
    name: "Hendrik Anthony Kramers",
  },
  {
    coordinates: "796,268,40",
    name: "Paul Dirac",
  },
  {
    coordinates: "936,268,40",
    name: "Arthur Compton",
  },
  {
    coordinates: "1086,278,40",
    name: "Louis de Broglie",
  },
  {
    coordinates: "1246,278,40",
    name: "Max Born",
  },
  {
    coordinates: "1390,290,40",
    name: "Niels Bohr",
  },
  {
    coordinates: "204,333,40",
    name: "Irving Langmuir",
  },
  {
    coordinates: "367,338,40",
    name: "Max Planck",
  },
  {
    coordinates: "527,333,40",
    name: "Marie Curie",
  },
  {
    coordinates: "702,336,40",
    name: "Hendrik Lorentz",
  },
  {
    coordinates: "892,326,40",
    name: "Albert Einstein",
  },
  {
    coordinates: "1042,326,40",
    name: "Paul Langevin",
  },
  {
    coordinates: "1162,326,40",
    name: "Charles-Eugène Guye",
  },
  {
    coordinates: "1332,326,40",
    name: "Charles Thomson Rees Wilson",
  },
  {
    coordinates: "1450,340,40",
    name: "Owen Willans Richardson",
  },
];

function Game() {
  const isSelected = useRef([]);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await getDocs(collection(database, "entries"));
      //console.log(data)
      return data.docs
    }
  
    fetchData().then( (e) => e.forEach(doc=>console.log(doc.data().entry))).catch(console.error);
    
  }, [])

  /*
  const handleSubmit = (ev) => {
    ev.preventDefault()
    //reference.push(myInput)
    console.log(myInput.current.value)
    addDoc(collection(database, "entries"), {
      entry: `${myInput.current.value}`,
    });
  }
*/
  const displayMenu = (i) => {
    isSelected.current.forEach( (ent,ind,arr)=> {
      arr[ind].classList.add('unselected');
      arr[ind].classList.remove('selected');
    })
    isSelected.current[i].firstChild.focus();
    isSelected.current[i].classList.add('selected');
    isSelected.current[i].classList.remove('unselected');
  };

  return (
    <div className={"container"}>
      <map name="testmap">
        {photoKey.map(function (entry, index) {
          let x = entry.coordinates.split(",")[0];
          let y = entry.coordinates.split(",")[1];
          return (
            <div key={entry.coordinates + 100}>
              <FaceTag
                className={"tag-div"}
                ref={el => isSelected.current[index] = el} 
                x={x}
                y={y}
                name={entry.name}/>
              <area
                shape="circle"
                coords={entry.coordinates}
                tabIndex="0"
                alt={index}
                onClick={ () => displayMenu(index)}
                key={entry}
                data-name={entry.name}
              />
            </div>
          );
        })}
      </map>
      <img src={photo} alt="Solvay Conference" useMap="#testmap" />
    </div>
  );
}

export default Game;
