import React, { useEffect, useState } from "react";
import axios from "axios"; 
import Post from "./Post";

function SeecretList() {
  const [seecrets, setSeecrets] = useState([]);

  useEffect(() => {
    
    const fetchSeecrets = async () => {
      try {
        const response = await axios.get("/seecrets"); 
        setSeecrets(response.data); 
      } catch (error) {
        console.error("Error fetching seecrets:", error);
      }
    };

    fetchSeecrets();
  }, []); // Empty dependency array to run the effect only once when the component mounts

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