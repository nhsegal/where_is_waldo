import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app, database } from "../firebase";
import { Link } from "react-router-dom";
import "./Times.css";

const Times = (props) => {
  const [bestTimes, setBestTimes] = useState([]);

  function compare( a, b ) {
    let A = +(a.time.slice(0,2)+a.time.slice(3,5)+a.time.slice(6,8))
    let B = +(b.time.slice(0,2)+b.time.slice(3,5)+b.time.slice(6,8))
    if ( A > B){
      console.log(A)
      return 1;
    }
    if ( A < B ){
      console.log(B)
      return -1;
    }
    console.log('tie')
    return 0;
  
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(database, "bestTimes"));
      setBestTimes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const processData = async() => {
      let sortedTimes = [...bestTimes].sort(compare).slice(0,5)
      console.log(sortedTimes)
      setBestTimes(sortedTimes)
    }
    fetchData().then(processData)

  }, []);

  return (
    <div className="times">
      <h1>
        <span className="where">Best</span> <span className="waldo">Times</span>
      </h1>
      <ol>
      { bestTimes.map((e) =>  {
        return (
          <li key={e.id}>{e.name} {e.time}</li>
        )
      })

}
      </ol>
     
      <Link to="/" aria-label="Home">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Times;
