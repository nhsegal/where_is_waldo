import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return(
    <div className="home">
    <h1>Welcome!</h1>
    <p>Find Waldo, Odlaw, and the Wizard as quickly as possible </p>
    <Link to="/Game" aria-label="Game">
      Ready to Play?
    </Link>
  </div>
  )

}

export default Home;
