import React from "react";
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
        <div className="wall">
          <div className="hello">
            <div className="container">
            <p>Welcome to the Pokemon World</p>
            <p>Please press the button to see the magic</p>
            <button><Link className="linkto" to="/results">GO!</Link></button>
          </div>
          </div> 
        </div> 
      </>
    );

  }
  
  export default Home;