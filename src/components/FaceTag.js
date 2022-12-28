import React, { forwardRef } from "react";
import styled from "styled-components";
import "./FaceTag.css";
import StyledDropDown from "./StyledDropDown";

const FaceTag = forwardRef(function FaceTag(props, ref) {

  
  
  const listStyle = {
    top: `${props.y - 50}px`,
    left: `${props.x - 50}px`,
    position: "absolute",
    width: "auto",
    height: "1.2rem",
    color: "white",
    background: "transparent",
    border: "none",
  };


  const arrayOfNames = [
    "Niels Bohr",
    "Max Born",
    "William Lawrence Bragg",
    "Léon Brillouin",
    "Louis de Broglie",
    "Arthur Compton",
    "Marie Curie",
    "Peter Debye",
    "Paul Dirac",
    "Théophile de Donder",
    "Paul Ehrenfest",
    "Albert Einstein",
    "Ralph Howard Fowler",
    "Charles-Eugène Guye",
    "Werner Heisenberg",
    "Émile Henriot",
    "Édouard Herzen",
    "Hendrik Anthony Kramers",
    "Martin Knudsen",
    "Paul Langevin",
    "Irving Langmuir",
    "Hendrik Lorentz",
    "Wolfgang Pauli",
    "Auguste Piccard",
    "Max Planck",
    "Owen Willans Richardson",
    "Erwin Schrödinger",
    "Charles Thomson Rees Wilson",
    "Jules-Émile Verschaffelt",
  ];

  return (
    
    <StyledDropDown 
    ref={ref} 
    onFocus={()=>console.log('focused')} 
    tabIndex={0}   
    makeVisible = {ref}  
    name={'nameList'} 
    className={'unselected'}
    x={props.x}
    y={props.y}
    >
      <select
        ref={ref}
        id="nameList"
        name="nameList"
        data-coord={`${props.x},${props.y},40`}>
        <option value="" defaultValue>
          {" "}
        </option>

        {arrayOfNames.map((entry, index) => (
          <option value={`entry`} key={entry}>
            {entry}
          </option>
        ))}
      </select>
    </StyledDropDown  >
  );
});
export default FaceTag;
