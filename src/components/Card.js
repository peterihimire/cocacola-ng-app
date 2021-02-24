import React from "react";
import "./Card.css";
import map from "../assets/map.png";

const Card = () => {
  return (
    <div className="card">
      <img src={map} alt="card" className="card-img" />
      <div className="card-footer">
        <h3>Cocacola Depots</h3>
        <p>26 location posts</p>
      </div>
    </div>
  );
};

export default Card;
