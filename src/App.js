import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
import Times from "./components/Times";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { app, database } from "./firebase";
import timeToNumber from "./helpers/timeToNumber";

function App() {

  const [bestTimes, setBestTimes] = useState([]);

  function compare( a, b ) {
    let A = timeToNumber(a.time);
    let B = timeToNumber(b.time);
    if ( A > B){ 
      return 1;
    }
    if ( A < B ){
      return -1;
    }
    return 0;
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getDocs(collection(database, "bestTimes"));
        setBestTimes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        .sort(compare).slice(0,5));
 
      }
      catch(error){
        console.error(error)
      }
    };
    fetchData().catch((err)=>console.log(err))
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game bestTimes = {bestTimes}/>} />
        <Route path="/Times" element={<Times bestTimes ={bestTimes}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
