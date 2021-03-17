import React from 'react';
import {Link} from 'react-router-dom';

import img1 from "./assets/Img1.png";
import img2 from "./assets/Img2.png";
import img3 from "./assets/Img3.png";
import img4 from "./assets/Img4.png";

function HomeImageContainer() {
    return (
        <div className="row home__imageContainer">
        <div className="col-md-5 d-flex justify-content-end">
          <Link className="imageContainer__img" to={{
            pathname:"/game/"+String("c8sEokqTer2hZdLt8IUW"),
          }}>
            <img src={img1} style={{width:"100%", height:"100%"}} alt="" />
          </Link>
        </div>
        <div className="col-md-7">
          <div className="d-flex justify-content-start">
            <img src={img2} alt="" />
          </div>
          <div className="row pt-2">
            <div className="col-md-5 d-flex justify-content-end">
              <img src={img3} style={{width:"100%"}} alt="" />
            </div>
            <div className="col-md-6 d-flex justify-content-start">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
}

export default HomeImageContainer
