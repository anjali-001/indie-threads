import React, { useContext } from "react";
import "./Explore.css";
import PostCard from "../../components/PostCard";
import Filter from "../../components/Filter";
import { ExploreContext } from "../../context/ExploreContext";
import Spinner from '../../components/spinner'

const Explore = () => {
  const { exploreData, loader } = useContext(ExploreContext);

  if (exploreData == []) {
    return (
      <div className="explore-container text-light">
        <h1 style={{color: 'white'}}>
            <Spinner />
        </h1>
      </div>
    );
  }

  if(loader){
    return(
      <div className="loaderContainer">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="explore componentContainer">
      <div className="custom-container">
        <div className="row justify-content-around">
          <div className="col-md-8 col-8 text-light explore__left">
            <h1 className="explore-heading">Active Communities</h1>
            {exploreData.length != 0 ? exploreData.map((post) => {
              return (
                <PostCard key={post.gameId} post={post} />
              );
            }) : <Spinner />
          }
          </div>
          <div className="col-md-4 filt-container">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
