import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import colaSpot from "../assets/cola-spot.png";

const Carousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 5;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1.5}
        gutter={20}
        // leftChevron={<button>{"<"}</button>}
        // rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          <img src={colaSpot} alt="cola spot" />
        </div>
        <div>
          <img src={colaSpot} alt="cola spot" />
        </div>
        <div>
          <img src={colaSpot} alt="cola spot" />
        </div>
        <div>
          <img src={colaSpot} alt="cola spot" />
        </div>
        <div>
          <img src={colaSpot} alt="cola spot" />
        </div>

        {/* <div style={{ height: 500, background: "#EEE" }}>Seventh card</div> */}
      </ItemsCarousel>
    </div>
  );
};

export default Carousel;

// import React from "react";
// import ItemsCarousel from "react-items-carousel";
// import range from "lodash/range";

// class Carousel extends React.Component {
//   componentWillMount() {
//     this.setState({
//       children: [],
//       activeItemIndex: 0,
//     });

//     // setTimeout(() => {
//     //   this.setState({
//     //     children: createChildren(20),
//     //   });
//     // }, 100);
//   }

//   createChildren = (n) =>
//     range(n).map((i) => (
//       <div key={i} style={{ height: 200, background: "#333" }}>
//         {i}
//       </div>
//     ));

//   changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

//   render() {
//     const { activeItemIndex, children } = this.state;

//     return (
//       <ItemsCarousel
//         // Placeholder configurations
//         enablePlaceholder
//         numberOfPlaceholderItems={5}
//         minimumPlaceholderTime={1000}
//         placeholderItem={
//           <div style={{ height: 200, background: "#900" }}>Placeholder</div>
//         }
//         // Carousel configurations
//         numberOfCards={3}
//         gutter={12}
//         showSlither={true}
//         firstAndLastGutter={true}
//         freeScrolling={false}
//         // Active item configurations
//         requestToChangeActive={this.changeActiveItem}
//         activeItemIndex={activeItemIndex}
//         activePosition={"center"}
//         // chevronWidth={24}
//         // rightChevron={">"}
//         // leftChevron={"<"}
//         // outsideChevron={false}
//       >
//         {children}
//       </ItemsCarousel>
//     );
//   }
// }
// export default Carousel;
