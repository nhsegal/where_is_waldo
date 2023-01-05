import React, { useState, useEffect }  from 'react';
import waldo from "../imgs/waldo.png";
import odlaw from "../imgs/odlaw.jpeg";
import wizard from "../imgs/wizard.png";
import "./CharacterKey.css";

const CharacterKey = () => {
  return (
    <div className='character-key'>
     <img src={waldo} alt='waldo' className='character-key-img'/>
     <img src={odlaw} alt='odlaw' className='character-key-img'/>
     <img src={wizard} alt='wizard' className='character-key-img'/>
    </div>
  )
}

export default CharacterKey;