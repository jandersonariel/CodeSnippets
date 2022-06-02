import React from "react";
import './style.css'

function Card() {
  return (
    <div className="container">
      <div className="card">
        <div className="front">
          <div className="img" ></div>
          <h2>@janderson</h2>
        </div>
        <div className="back">
          <div className="img" ></div>
            <h2>Janderson Ariel</h2>
            <b>@developer</b>
        </div>
      </div>
    </div>
  );
}

export default Card;
