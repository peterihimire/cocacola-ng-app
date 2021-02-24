import React, { useState } from "react";
import "./Carousel.css";
import ItemsCarousel from "react-items-carousel";
import Card from "../components/Card";

const Carousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  return (
    <>
      <div className="hidden-xs">
        <div className="carousel">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3.5}
            gutter={30}
            freeScrolling={true}
            leftChevron={<button>{"<"}</button>}
            rightChevron={<button>{">"}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
          </ItemsCarousel>
        </div>
      </div>

      <div className="visible-xs hidden-md">
        <div className="carousel">
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1.3}
            gutter={30}
            freeScrolling={true}
            outsideChevron
          >
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
            <div>
              <div className="one-slide">
                <Card />
              </div>
            </div>
          </ItemsCarousel>
        </div>
      </div>
    </>
  );
};

export default Carousel;
