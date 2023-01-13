import React from "react";
import { Link } from "react-router-dom";
import "./Times.css";

const Times = (props) => {
  return (
    <div className="times">
      <h1>
        <span className="where">Best</span> <span className="waldo">Times</span>
      </h1>
      <ol>
        {props.bestTimes.map((e, i) => {
          return (
            <li key={e.id}>
              <div>{i + 1}.</div> <div className="name">{e.name}</div>{" "}
              <div>{e.time}</div>
            </li>
          );
        })}
      </ol>

      <Link to="/" aria-label="Home">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Times;
