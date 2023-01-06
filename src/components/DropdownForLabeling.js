import React, { useState, useEffect, useRef, createRef } from "react";
import "./DropdownForLabeling.css";
import Select from "react-select";

const DropdownForLabeling = (props) => {
  let selectRef = createRef();

  const listStyle = {
    position: "absolute",
    top: `${props.menuPosition.y - 20}px`,
    left: `${props.menuPosition.x - 20}px`,
    display: `${props.menuView}`,
  };

  const options = [
    { value: "waldo", label: "Waldo" },
    { value: "odlaw", label: "Odlaw" },
    { value: "wizard", label: "Wizard" },
  ];

  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    console.log(event?.value);
    setSelected(event);
  };

  useEffect(() => {
    selectRef.current.setValue(null);
  }, [props.menuPosition]);

  return (
    <div className="dropdown-container" style={listStyle}>
      <div className="target-box"></div>
      <Select
        ref={selectRef}
        onChange={handleChange}
        className="icon-menu"
        id="characters"
        name="characters"
        options={options}
        //inputValue = {selected}
        defaultValue={null}
      />
    </div>
  );
};

export default DropdownForLabeling;
