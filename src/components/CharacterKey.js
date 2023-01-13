import React, { useState, useEffect }  from 'react';
import waldo from "../imgs/waldo.png";
import odlaw from "../imgs/odlaw.jpeg";
import wizard from "../imgs/wizard.png";
import "./CharacterKey.css";

const CharacterKey = (props) => {
  const gameState = props.gameState;

  return (
    <div className='character-key'>
      <div className='char-cont'> 
      <div className='char-label'>Waldo</div>
      <img src={waldo} alt='waldo' className={gameState.waldoFound ? 'found' : 'character-key-img'}/>
    
      </div>
      <div className='char-cont'> 
      <div className='char-label'>Odlaw</div>
     <img src={odlaw} alt='odlaw' className={gameState.odlawFound ? 'found' : 'character-key-img'}/>
     </div>
     <div className='char-cont'> 
     <div className='char-label'>Wizard</div>
     <img src={wizard} alt='wizard' className={gameState.wizardFound ? 'found' : 'character-key-img'}/>
     </div>
   
    </div>
  )
}

export default CharacterKey;