import React, { useEffect, useState } from "react";
import axios from "axios"; 
import Post from "./Post";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function SeecretList( message, filter = "" ) {
  const [seecrets, setSeecrets] = useState([]);
  const { pathname } = useLocation();


  useEffect(() => {
    
    const fetchSeecrets = async () => {
      try {
        const response = await axios.get("/seecrets/"); 
        setSeecrets(response.data); 
      } catch (error) {
        console.error("Error fetching seecrets:", error);
      }
    };

    fetchSeecrets();
  }, [filter, pathname]); 

  return (
    
    <div>
      <h2>Seecret List</h2>
      {seecrets.map((seecret) => (
        <Post key={seecret.id} {...seecret} />
      ))}
    </div>
  );
}

export default SeecretList;