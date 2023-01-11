import React, {useState} from "react";


const Marker = (props) => {


  const [pos, setPos] = useState(props.markerPosition)
  const listStyle = {
    position: "absolute",
    top: `${pos.y-20}px`,
    left: `${pos.x-20}px`,
    border: '4px solid black',
    height: '2.5rem',
    width: '2rem',
   
  };

  return (
    <div className="marker" style={listStyle}>
    
    </div>
  );
};

export default Marker