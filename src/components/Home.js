import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return(
    <div>
      <div> Label as many physicists as you can as quickly as you can</div>

    <Link to="/Game" aria-label="Game">
      Ready to Play?
    </Link>
  </div>
  )

}

export default Home;
