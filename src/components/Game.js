import React from "react";
import photo from "../imgs/solvayphoto.jpeg";

function Game() {
 

  const tagFace = (ev) => {
    console.log(ev.target)
  }

  function drawCircle(x, y, radius, fill, stroke, strokeWidth) {
    const canvas = document.getElementById('canvas');
    console.log(canvas)
    const ctx = canvas.getContext('2d');
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
      ctx.fillStyle = fill
      ctx.fill()
    }
    if (stroke) {
      ctx.lineWidth = strokeWidth
      ctx.strokeStyle = stroke
      ctx.stroke()
    }
  }

  return (
    <div>
      {
        <canvas id="canvas" width="800" height="600" 
        style ={{background: `url('${photo}')`}} 
        onClick={drawCircle(100, 100, 100, false,  'black', 'red', 2)}>
        Your browser does not support the canvas element.
      </canvas>
      /*
      Instead of canvas
      Shows the first three heads
      <map name="testmap">
        <area shape="circle" coords="325,145,40" tabIndex="0" alt="first" onClick={tagFace} data-id-number="0"/>
        <area shape="circle" coords="438,173,40" tabIndex="0" alt="second" data-test-id="1" />
        <area shape="circle" coords="520,208,40" tabIndex="0" alt="third" />
      </map>
      <img src={photo} alt="Solvay Conference" useMap="#testmap" />
      */
      }
    </div>
  );
}

export default Game;
