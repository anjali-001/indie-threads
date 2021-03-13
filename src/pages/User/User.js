import React from 'react'
import './User.css';
import img from '../Home/assets/Img3.png'
import FeatherIcon from "feather-icons-react";
import UserCommunityCard from './UserCommunityCard';

const data=[
    {
        title: "Untitled Goose Game",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        genre: ["horror", "adventure", "RPG"]
    },
    {
        title: "Among Us",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        genre: ["horror", "action", "RPG"]
    },
    {
        title: "Assasins Creed",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        genre: ["adventure", "RPG"]
    },
    {
        title: "Assasins Creed",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        genre: ["adventure", "RPG"]
    }

]

const User = () => {
    return (
        <div className="componentContainer"> 
        <div className="custom-container user">
           <div className="row">
               <div className="col-md-3 col-3 user__left">
                    <img className="m-5" src={img}/>
               </div>
               <div className="col-md-9 col-9 user__right">
                   <div className="user__rightName">
                        <h2 className="m-5">Name (username)</h2>
                        <button className="user__button m-5"><FeatherIcon icon="edit-2" className="user__editIcon"/>Edit Profile</button>
                   </div>
               <div className="user__rightLink d-flex ml-5">
                    <a href="https://cmd.to/" className="d-flex">
                            <FeatherIcon className="user__icon" icon="link"/>
                            <p className="pl-2 pr-5">Website</p>
                    </a>
                    <a href="https://cmd.to/" className="d-flex">
                            <FeatherIcon className="user__icon" icon="link-2"/>
                            <p className="pl-2"> another Website</p>
                    </a>
               </div>
               <div className="ml-5 d-flex py-2">
                   <p className="pr-2">Interests</p>
                   <p className="user__rightTag mr-3">Adventure</p>
                   <p className="user__rightTag mr-3">Action</p>
                   <p className="user__rightTag mr-3">Casual</p>
                   <p className="user__rightTag mr-3">RPG</p>
               </div>
               <p className="ml-5">The bio will go here: Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis</p>
               </div>
           </div>
           <div className="user__communities">
               <h3 className="ml-5">Your Communities</h3>
               <div className="row m-5">
               {data.map((item) =>
                    <UserCommunityCard item={item}/>)}
                </div>
           </div>
        </div>
        </div>
    )
}

export default User


{/* <d
</div>
Action
Adventure
Casual
Multiplayer
Racing
RPG
Simulations
Sports
Strategy
</div> */}