import React from "react";
import './Home.css';
import './notfound.png'

function NotFound() {
    return (
        <>
        <div className="hello">
          <div className="container">
          <p>Sorry</p>
          <p>There's nothing here</p>
          <img src={require('./notfound.png')} size='50px' alt="sad pikachu" />
        </div>
        </div>  
      </>
    );
}
  
export default NotFound;
