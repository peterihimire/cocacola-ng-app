import React from "react";
import "./Card.css";
import map from "../assets/map.png";

const Card = () => {
  return (
    <div className="card">
      <img src={map} alt="card" className="card-img" />
      <div className="card-footer">
        <h5>trucks on field</h5>
        <p>7 thing posts</p>
      </div>
    </div>
  );
};

export default Card;
