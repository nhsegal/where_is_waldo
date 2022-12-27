import React from "react";

function ListOfNames(props) {
  const listStyle = {
    top: `${props.y}px`,
    left: `${props.x - 50}px`,
    position: "absolute",
    width: "6rem",
    height: "1rem",
    background: "grey",
  };
  return (
    <form>
      <select style={listStyle} id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
    </form>
  );
}

export default ListOfNames;
