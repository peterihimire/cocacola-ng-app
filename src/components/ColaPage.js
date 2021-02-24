import React from "react";
import "../components/ColaPage.css";
import Carousel from "./Carousel";
import logo from "../assets/cola-logo.png";
import folow from "../assets/follow-btn.svg";

const ColaPage = () => {
  return (
    <section className="colapage">
      <div className="colapage-container">
        <div className="colapage-center">
          <div className="cola-header">
            <img src={logo} alt="cocacola-round-logo" />
            <div className="cocacola-ng">
              <h4>cocacola ng</h4>
              <span>
                <img src={folow} alt="cocacola-round-logo" />
              </span>
            </div>
            <div className="scape-post">
              <div>scapes</div> <span>28 posts</span>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default ColaPage;
