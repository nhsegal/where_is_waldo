import React from "react";
import photo from "../imgs/solvayphoto.jpeg";
import FaceLabel from "./FaceLabel";
import ListOfNames from "./ListofNames";
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
  const tagFace = (ev) => {
    console.log(ev.target);
  };

  return (
    <div className={"container"}>
      {photoKey.map(function (entry, index) {
        let x = entry.coordinates.split(",")[0];
        let y = entry.coordinates.split(",")[1];
        return (
          <ListOfNames
            className={"tag-div"}
            key={entry.coordinates + 100}
            x = {x} y ={y}
            name= {entry.name}>
          </ListOfNames>
        );
      })}

      <img src={photo} alt="Solvay Conference" useMap="#testmap" />

      <map name="testmap">
        {photoKey.map(function (entry, index) {
          return (
            <div key={entry.coordinates + 1000} className={"card-div"}>
              <area
                shape="circle"
                coords={entry.coordinates}
                tabIndex="0"
                alt={index}
                onClick={tagFace}
                key={entry}
                data-name={entry.name}
              />
            </div>
          );
        })}
      </map>
    </div>
  );
}

export default Game;
