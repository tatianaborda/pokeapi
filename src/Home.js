import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Results from './Results';

function Home() {
  
    const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");
  const [Move, setMoves] = useState("");
  const [Pokemon, setPokemon] = useState([]);

  
  const Typename = (event) => {
    setname(event.target.value);
  };

    return (
        <>
          <Results/>
          <Button variant="contained">Cargar</Button>
        </>
    );

  }
  
  export default Home;