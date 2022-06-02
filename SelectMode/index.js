import React from "react";
import './style.css'

function Card() {
  return (
    <div className="containerSw">
      <Input type="checkbox" id="toggle"/>
      <Label htmlFor="toggle"></Label>
    </div>
  );
}

export default Card;
