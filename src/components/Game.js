import React from "react";
import photo from "../imgs/solvayphoto.jpeg";

const facecoodinates = [
  //Back row left to right
  "325,145,40", 
  "438,173,40", 
  "520,208,40", 
  "654,192,40",
  "790,208,40",
  "914,180,40",
  "1024,180,40",
  "1138,180,40",
  "1260,170,40",
  "1338,130,40",
  "1400,173,40",
  // Seated
  "154,287,40",
  "204,333,40",
  "297,294,40",
  "367,338,40",
  "448,288,40",
  "527,333,40",
  "616,288,40",
  "702,336,40",

];


function Game() {
  const tagFace = (ev) => {
    console.log(ev.target);
  };

  return (
    <div>
      <map name="testmap">
        {
        facecoodinates.map( function(entry, index) {
          return(
            <area
            shape="circle"
            coords={entry}
            tabIndex="0"
            alt={index}
            onClick={tagFace}
            key={entry}
            data-id-number="0"
          />  
          
          )
        }
        )
}
       
    
        
      </map>
      <img src={photo} alt="Solvay Conference" useMap="#testmap" />
    </div>
  );
}

export default Game;
