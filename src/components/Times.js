import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app, database } from "../firebase";
import { Link } from "react-router-dom";
import "./Times.css";

const Times = (props) => {
  /*
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
      try{
        const data = await getDocs(collection(database, "bestTimes"));
        setBestTimes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort(compare).slice(0,5));
        console.log(bestTimes)
      }
      catch(error){
        console.error(error)
      }
    };
    fetchData().catch((err)=>console.log(err))
  }, []);
*/
  return (
    <div className="times">
      <h1>
        <span className="where">Best</span> <span className="waldo">Times</span>
      </h1>
      <ol>
      { props.bestTimes.map((e,i) =>  {
        return (
          <li key={e.id}><div>{i+1}.</div> <div className="name">{e.name}</div> <div>{e.time}</div></li>
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
