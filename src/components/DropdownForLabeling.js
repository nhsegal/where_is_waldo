import React, { useState, useEffect, useRef, createRef }  from 'react';
import './DropdownForLabeling.css'
import Select from 'react-select'

/*
Import react select and use Select
then reset the select

*/


const DropdownForLabeling = (props) => {
  //let myRef = createRef();
  const listStyle = {
    position: 'absolute',
    top: `${props.menuPosition.y-20}px`,
    left: `${props.menuPosition.x-20}px`,
    display: `${props.menuView}`
  }

  const options = [
    { value: '', label: ''},
    { value: 'waldo', label: 'Waldo'},
    { value: 'odlaw', label: 'Odlaw'},
    { value: 'wizard', label: 'Wizard'},
    
  ]
 


  return (
    <div className='dropdown-container'  style={listStyle}>
   <div className='target-box'></div>
     <Select 
    //  ref ={myRef}
      className='icon-menu' 
      id='characters' 
      name='characters'
      options = {options}
      />
    </div>
   
  )
}

export default DropdownForLabeling