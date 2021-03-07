import React from "react";
import "./Home.css";
import img1 from "./assets/Img1.png";
import img2 from "./assets/Img2.png";
import img3 from "./assets/Img3.png";
import img4 from "./assets/Img4.png";
const Home = () => {
  return (
    <div className="home componentContainer">
      <div className="row">
        <div className="col-md-3 col-3 text-light home__left bg-danger">
          <h5>Browse by Genre</h5>
        </div>
        <div className="col-md-9 col-9 text-light home__right bg-success">
          <h1 className="home__right__h1">Featured and recommended</h1>
          
              <div className="row home__imageContainer">
                <div className="col-md-5">
                  <img src={img1} alt="" />
                </div>
                <div className="col-md-7">
                  <div>
                    <img src={img2} alt="" />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <img src={img3} alt="" />
                    </div>
                    <div className="col-md-6">
                      <img src={img4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            
        </div>
      </div>
    </div>
  );
};

export default Home;
