import React from "react";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import HomeImageContainer from "./HomeImageContainer";
import HomeBottomCarousel from './HomeBottomCarousel';

const Home = () => {
  return (
    <div className="home componentContainer">
        <div className="custom-container">
      <div className="row">
        <div className="col-md-3 col-3 text-light home__left">
          <h5>Browse by Genre</h5>
          <ul className="home__filter">
              <li>Action</li>
              <li>Adventure</li>
              <li>Casual</li>
              <li>Multiplayer</li>
              <li>Racing</li>
              <li>RPG</li>
              <li>Simulations</li>
              <li>Sports</li>
              <li>Strategy</li>

          </ul>
        </div>
        <div className="col-md-9 col-9 text-light home__right">
          <h1 className="home__right__h1 seperator">Featured and recommended</h1>
          <HomeImageContainer/>
          <h1 className="seperator">Top Releases</h1>
          <HomeCarousel/>
          <h1 className="seperator">Top Communities</h1>
          <HomeBottomCarousel/>
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
