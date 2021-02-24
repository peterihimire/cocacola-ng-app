import React from "react";
import "./Card.css";
import map from "../assets/map.png";
import location2 from "../assets/location-2.svg";

const Card = () => {
  return (
    <div className="card">
      <div className="map-img">
        <img src={map} alt="card" className="card-img" />
      </div>
      <div className="card-footer">
        <h3>Cocacola Depots</h3>
        <p>26 location posts</p>
      </div>
      <div className="cola-mark">
        <img src={location2} alt="card" className="location-2" />
      </div>
      <div className="cola-mark">
        <img src={location2} alt="card" className="location-1" />
      </div>
      <div className="cola-mark">
        <img src={location2} alt="card" className="location-3" />
      </div>
      <div className="cola-mark">
        <img src={location2} alt="card" className="location-4" />
      </div>
    </div>
  );
};

export default Card;
