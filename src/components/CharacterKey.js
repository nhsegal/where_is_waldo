import React, { useState, useEffect }  from 'react';
import waldo from "../imgs/waldo.png";
import odlaw from "../imgs/odlaw.jpeg";
import wizard from "../imgs/wizard.png";
import "./CharacterKey.css";

const CharacterKey = (props) => {
  const gameState = props.gameState;
  console.log(gameState)
  console.log('charkey rendered')

  return (
    <div className='character-key'>
     <img src={waldo} alt='waldo' className={gameState.waldoFound ? 'found' : 'character-key-img'}/>
     <img src={odlaw} alt='odlaw' className={gameState.odlawFound ? 'found' : 'character-key-img'}/>
     <img src={wizard} alt='wizard' className={gameState.wizardFound ? 'found' : 'character-key-img'}/>
    </div>
  )
}

export default CharacterKey;