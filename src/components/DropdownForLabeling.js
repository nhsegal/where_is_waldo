import React, { useState, useEffect, useRef, createRef }  from 'react';
import './DropdownForLabeling.css'

const DropdownForLabeling = (props) => {
  //let myRef = createRef();
  const listStyle = {
    position: 'absolute',
    top: `${props.menuPosition.y-40}px`,
    left: `${props.menuPosition.x-20}px`,
  }
  console.log(listStyle)
  return (
    <div className='dropdown-container'  style={listStyle}>
  
     <select 
    //  ref ={myRef}
      className='icon-menu' 
      id='characters' 
      name='characters'
      >
      <option value={'waldo'} >Waldo</option>
      <option value={'odlaw'}>Odlaw</option>
      <option value={'wizard'}>The Wizard</option>
    </select>
    <div className='target-box'></div>
    </div>
   
  )
}

export default DropdownForLabeling