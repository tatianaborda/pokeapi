import React, { useState, useEffect } from "react";
import './Results.css';
import {Link} from "react-router-dom";
import PokeCard from './PokeCard';
import axios from "axios";


function Results() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=10&limit=10");
  const [pokedefault, setPokeDefault] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10");
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  const pokeData = async() =>{
    setLoading(true)
    const resp = await axios.get(url);
    setNext(resp.data.next)
    setPrevious(resp.data.previous)
    getPokemons(resp.data.results)
    setLoading(false)
  }

  const getPokemons = async(resp) =>{
    resp.map(async(item)=>{
      const response= await axios.get(item.url)
      setPokemon(state=>{
        state=[...state, response.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
      })
    })
  }


  useEffect(()=>{
    pokeData();
  },[url])

  return (
    <>
      <div className="cards-container">
        <PokeCard pokemon={pokemon} loading={loading} key={pokemon}/>
      </div>
      <div className="button-container">
      {pokedefault && <button onClick={()=>{
                              setPokemon([])
                              setUrl(pokedefault) 
                            }}>RELOAD</button>}
        <div className="button-group">
          {previous && <button onClick={()=>{
                              setPokemon([])
                              setUrl(previous) 
                            }}>PREV</button>}
          { next && <button onClick={()=>{
                              setPokemon([])
                              setUrl(next)
                            }}>NEXT</button>}
      </div>
      </div>
    </>
  );
}


export default Results;