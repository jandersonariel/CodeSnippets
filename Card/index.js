import React from "react";
import './style.css'

function Card() {
  return (
    <div className="container">
      <div className="card">
        <div className="front">
          <div className="img" ></div>
          <h2>@intagram</h2>
        </div>
        <div className="back">
          <div className="img" ></div>
            <h2>Your Name</h2>
            <b>@intagram</b>
        </div>
      </div>
    </div>
  );
}

export default Card;
