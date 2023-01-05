import React, { forwardRef, useState } from "react";
import "./FaceTag.css";
import {StyledDropDown, DropDownResult} from "./Styled";

const FaceTag = forwardRef(function FaceTag(props, ref) {
  const [selectValue, setSelectValue] = useState("");
  const onChange = (event) => {
    const value = event.target.value;
    event.target.classList.remove('selected');
    event.target.classList.add('unselected');
    setSelectValue(value);
  }
  
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
    "Waldo",
    "Odlaw",
    "The Wizard",
  ];

  return (
    <>
    <StyledDropDown 
    ref={ref} 
    tabIndex={0}   
    makeVisible = {ref}  
    name={'nameList'} 
    className={'unselected'}
    x={props.x}
    y={props.y}
    >
      <select
        onBlur={ onChange }
        ref={ref}
        id="nameList"
        name="nameList"
        data-coord={`${props.x},${props.y},40`}>
        <option value="" defaultValue>
          {" "}
        </option>
        {arrayOfNames.map((entry, index) => (
          <option value={entry} key={entry}>
            {entry}
          </option>
        ))}
      </select>
    </StyledDropDown  >
   <DropDownResult x={props.x} y={props.y}>{selectValue}</DropDownResult>
      </>
  );
});
export default FaceTag;
