import React, { useState, useEffect, useContext } from "react";
import "./Explore.css";

import PostCard from "../../components/PostCard";
import Filter from "../../components/Filter";
import { ExploreContext } from "../../context/ExploreContext";
import buttonIcon from '../../assets/button.png'
import { Link } from "react-router-dom";
import AuthContext from '../../auth'

import Spinner from '../../components/spinner';

const Explore = () => {
  // const [data, setData] = useState([])
  const {exploreData} = useContext(ExploreContext);
  const { currentUser } = useContext(AuthContext); 
  // console.log(exploreData);

//   useEffect(() => {
//       console.log("reloaded")
//   }, [exploreData])

  if (exploreData == []) {
    // console.log('Explore Page data: True')
    return (
      <div className="explore-container text-light">
        <h1 style={{color: 'white'}}>
            <Spinner />
        </h1>
      </div>
    );
  }

  // console.log('Explore Page data: ', exploreData)

  
  return (
    <div className="explore componentContainer">
      <div className="custom-container">
        <div className="row justify-content-around">
          <div className="col-md-8 col-8 text-light explore__left">
            <h1 className="explore-heading">Active Communities</h1>
            {exploreData.length != 0 ? exploreData.map((post) => {
              return (
                // console.log(post)
                <PostCard post={post}/>
              );
            }) : <Spinner />
          }
          </div>
          <div className="col-md-4 filt-container">
            <Filter />
            {currentUser ? 
            <Link className="create" to="/post">
              <img className="create" src={buttonIcon} />
            </Link>
            :
            <Link className="create" to="/login">
              <img className="create" src={buttonIcon} />
            </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
