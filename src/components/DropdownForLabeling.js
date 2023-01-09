import React, { useState, useEffect, createRef } from "react";
import "./DropdownForLabeling.css";
import Select from "react-select";
import { checkForOdlaw, checkForWaldo, checkForWizard } from "../helpers/checkForSuccess";

const DropdownForLabeling = (props) => {
  let selectRef = createRef();
  const listStyle = {
    position: "absolute",
    top: `${props.menuPosition.y - 20}px`,
    left: `${props.menuPosition.x - 20}px`,
    display: `${props.menuView}`,
  };

  const [options, setOptions] = useState([      
    { value: "waldo", label: "Waldo", disabled: false },
    { value: "odlaw", label: "Odlaw", disabled: false },
    { value: "wizard", label: "Wizard", disabled: false },
  ]);

  const dataFromFirebase = props.targetInfo
  console.log('datafromfirebase')
  console.log(dataFromFirebase)

  const handleChange = (selectedOption) => {
    if (selectedOption){
      if (selectedOption.value === 'waldo') {
        if (checkForWaldo(props.menuPosition.x, props.menuPosition.y, dataFromFirebase) ){
          props.setGameState({waldoFound: true, odlawFound: props.gameState.odlawFound, wizardFound: props.gameState.wizardFound})
          setOptions([ { value: "waldo", label: "Waldo", disabled: true }, options[1], options[2]])
        }
        return 
      }
      if (selectedOption.value === 'odlaw') {
        if (checkForOdlaw(props.menuPosition.x, props.menuPosition.y, dataFromFirebase) ){
          props.setGameState({waldoFound: props.gameState.waldoFound, odlawFound: true, wizardFound: props.gameState.wizardFound})
          setOptions([ options[0], { value: "odlaw", label: "Odlaw", disabled: true }, options[2]])
        }
        return
      }
      if (selectedOption.value === 'wizard') {
        if (checkForWizard(props.menuPosition.x, props.menuPosition.y, dataFromFirebase) ){
          props.setGameState({waldoFound: props.gameState.waldoFound, odlawFound: props.gameState.odlawFound, wizardFound: true})
          setOptions([ options[0], options[1],{ value: "wizard", label: "Wizard", disabled: true },])
        }
        return
      }
    }
  };

  useEffect(() => {
    selectRef.current.setValue(null);
  }, [props.menuPosition]);

  return (
    <div className="dropdown-container" style={listStyle}>
      <div className="target-box"></div>
      <div style={{width: '140px'}}>
      <Select
        ref={selectRef}
        onChange={handleChange}
        className="icon-menu"
        id="characters"
        name="characters"
        options={options}
        defaultValue={null}
        isOptionDisabled={(option) => option.disabled}
      />
      </div>
    </div>
  );
};

export default DropdownForLabeling;
