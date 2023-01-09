import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return(
    <div className="home">
    <h1><span className="where">Where's</span> <span className="waldo">Waldo?</span></h1>
    <p>Find Waldo, Odlaw, and the Wizard as quickly as possible. </p>
    <Link to="/Game" aria-label="Game">
     <button>Play a Round</button>
    </Link>
    <Link to="/Times" aria-label="Times">
     <button>View Best Times</button>
    </Link>
  </div>
  )

}

export default Home;
