import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { app, database } from "../firebase";

const Times = (props) => {

  const [bestTimes, setBestTimes] = []

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(database, "bestTimes"));
      return data.docs;
    };

    fetchData().then((docs) => {
      docs.forEach((doc) => {
        setBestTimes((bestTimes) => [...bestTimes, doc.data()].sort().slice(0,5));
      });
    });
  }, []);


  return (
    <div></div>
  )
}

 export default Times