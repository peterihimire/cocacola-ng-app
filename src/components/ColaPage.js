import React from "react";
import "../components/ColaPage.css";
import Carousel from "./Carousel";
import logo from "../assets/cola-logo.png";

const ColaPage = () => {
  return (
    <section className="colapage">
      <div className="colapage-container">
        <div className="colapage-center">
          <div className="cola-header">
            <div className="cola-icon-div">
              <img src={logo} alt="cocacola-round-logo" />
            </div>
            <div className="cocacola-ng">
              <div className="cola-head">
                <h1>cocacola ng</h1>
              </div>
              <div className="follow-div">
                <div className="follow-txt">
                  <h4>Follow</h4>
                </div>
              </div>
            </div>
            <div className="scape-post">
              <div className="scape">
                <h4>3 scapes</h4>
              </div>
              <span>
                <h4>24 posts</h4>
              </span>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default ColaPage;
