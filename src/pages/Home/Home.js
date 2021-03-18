import React, {useContext} from "react";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import HomeImageContainer from "./HomeImageContainer";
import HomeBottomCarousel from './HomeBottomCarousel';
import {Link} from 'react-router-dom'
import { ExploreContext } from "../../context/ExploreContext";



const Home = () => {

  const {filterData, setExpData} = useContext(ExploreContext);

  const genres = ["Horror", "Comedy", "Action", "Indie", "Adventure", "Thrilling"]
  
  const filterHomeGenre = (val) => {
    let arr = [];
    filterData.filter((item) => {
      if(item.genre.filter(post => 
        {
          if(post.toLowerCase().includes(val.toLowerCase()))
          arr.push(item);
        }
      ));
    });
    setExpData(arr)
  }


  return (
    <div className="home componentContainer">
        <div className="custom-container">
      <div className="row">
        <div className="col-md-3 col-3 text-light home__left">
          <h4 className="">Browse by Genre</h4 >
          <ul className="home__filter">
              {
                genres.map(item =>
                  <Link to="/explore" className="home__filterContainer"  onClick={() => filterHomeGenre(item)}>
                    <li className="home__filterOptions">{item}</li>
                  </Link> 
                )
              }
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
