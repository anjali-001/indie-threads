import React from "react";
import { Carousel } from "react-bootstrap";

import img6 from "./assets/Img6.png";

function HomeBottomCarousel() {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img6} alt="First slide" />
          <Carousel.Caption>
            <p>top releases</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeBottomCarousel;
