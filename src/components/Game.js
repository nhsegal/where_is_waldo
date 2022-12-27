import React from "react";
import photo from "../imgs/solvayphoto.jpeg";
import "./Game.css"


const facecoodinates = [
  //Back row left to right
  "325,145,40",
  "438,173,40",
  "520,208,40",
  "654,192,40",
  "790,208,40",
  "914,180,40",
  "1024,180,40",
  "1138,180,40",
  "1260,170,40",
  "1338,130,40",
  "1400,173,40",
  // Seated
  "154,287,40",
  "204,333,40",
  "297,294,40",
  "367,338,40",
  "448,288,40",
  "527,333,40",
  "616,288,40",
  "702,336,40",
  "796,268,40",
  "892,326,40",
  "936,268,40",
  "1042,326,40",
  "1086,278,40",
  "1162,326,40",
  "1246,278,40",
  "1332,326,40",
  "1390,290,40",
  "1450,340,40",
];

const names = [
  "Auguste Piccard",
  "Émile Henriot",
  "Paul Ehrenfest",
  "Édouard Herzen",
  "Théophile de Donder",
  "Erwin Schrödinger",
  "Jules-Émile Verschaffelt",
  "Wolfgang Pauli",
  "Werner Heisenberg",
  "Ralph Howard Fowler",
  "Léon Brillouin",
  "Peter Debye",
  "Martin Knudsen",
  "William Lawrence Bragg",
  "Hendrik Anthony Kramers",
  "Paul Dirac",
  "Arthur Compton",
  "Louis de Broglie",
  "Max Born",
  "Niels Bohr",
  "Irving Langmuir",
  "Max Planck",
  "Marie Curie",
  "Hendrik Lorentz",
  "Albert Einstein",
  "Paul Langevin",
  "Charles-Eugène Guye",
  "Charles Thomson Rees Wilson",
  "Owen Willans Richardson",
];




function Game() {
  const tagFace = (ev) => {
    console.log(ev.target);
  };

  return (
    <div className={"container"}>
       <div className="test-label">HELLO!</div>
       {
       facecoodinates.map(function (entry, index) {
        let x = entry.split(',')[0]
        let y = entry.split(',')[1]

        const myComponentStyle = {
          top: `${y}px`,
          left: `${x}px`,
         }
          return (
            <div className={"tag-div"} key={entry + 100} style={myComponentStyle}  >
            Where is this label
          </div>
          )})}



      <img src={photo} alt="Solvay Conference" useMap="#testmap" />
{
      /*
      {facecoodinates.map(function (entry, index) {
        let x = entry.split(',')[0]
        let y = entry.split(',')[1]

        const myComponentStyle = {
          color: 'blue',
          position: 'absolute',
          top: `${x}`,
          left: `${y}`,
         }

        }
          return (
            <div className={"tag-div"} key={entry + 100} style={myComponentStyle}  >
            Where is this label
          </div>
          )})}
     */
          }
      <map name="testmap">
        {facecoodinates.map(function (entry, index) {
          return (
            <div key={entry + 1000} className={'card-div'}>
              <area
                shape="circle"
                coords={entry}
                tabIndex="0"
                alt={index}
                onClick={tagFace}
                key={entry}
                data-id-number="0"
              />
            </div>
          );
        })}
      </map>
      
    </div>
  );
}

export default Game;
