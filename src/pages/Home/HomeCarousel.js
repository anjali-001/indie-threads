import React from "react";
import { Carousel } from "react-bootstrap";
import img5 from "./assets/Img5.png";
import './Home.css'

function HomeCarousel() {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="First slide" />
          <Carousel.Caption>
            <p>top releases</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
