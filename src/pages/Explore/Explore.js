import React, { useContext } from "react";
import {OverlayTrigger,Tooltip} from 'react-bootstrap'

import AuthContext from "../../auth";
import { Link } from "react-router-dom";
import Filter from "../../components/Filter";
import Spinner from '../../components/spinner';
import PostCard from "../../components/PostCard";
import buttonIcon from "../../assets/Button.svg";
import { ExploreContext } from "../../context/ExploreContext";

import "./Explore.css";

const Explore = () => {
  const { exploreData, loader } = useContext(ExploreContext);
  const { currentUser } = useContext(AuthContext);

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
                <PostCard post={post} />
              );
            }) : <Spinner />
          }
          </div>
          <div className="col-md-4 filt-container">
            <Filter />
            {currentUser ? (
              <Link className="create" to="/post">
                <OverlayTrigger
                  key='left'
                  placement='left'
                  id="tool_tip"
                  overlay={
                    <Tooltip id='left' className="explore__tooltip" style={{color:"red"}}>
                      Are you a developer? <strong>Add your game!</strong>
                    </Tooltip>
                  }
                >
                  <img className="button-fixed" src={buttonIcon} />
                </OverlayTrigger>
                
              </Link>
            ) : (
              <Link className="create" to="/login">
                <OverlayTrigger
                  key='left'
                  placement='left'
                  id="tool_tip"
                  overlay={
                    <Tooltip id='left' className="explore__tooltip">
                       Are you a developer? <strong>Add your game!</strong>
                    </Tooltip>
                  }
                >
                  <img className="button-fixed" src={buttonIcon} />
                </OverlayTrigger>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
