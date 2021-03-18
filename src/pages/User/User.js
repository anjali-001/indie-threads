import React, { useEffect, useState, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import FeatherIcon from "feather-icons-react";

import fire from '../../fire'
import AuthContext from '../../auth'
import img from '../Home/assets/Img3.png'
import UserCommunityCard from './UserCommunityCard';
import Spinner from '../../components/spinner';

import './User.css';

const User = (props) => {

    const [postData, setPostData] = useState([])
    const [loadingPosts, setLoadingPosts] = useState(true)
    const [loading, setLoading] = useState(true)
    const currentUser = useContext(AuthContext);

    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
    
        const postsRef = fire.firestore().collection("posts");
        

        const getPosts = async () => {
            
            const docs = await postsRef.get();
            const docsData = [];
            docs.forEach(doc => {
                const tmpData = doc.data();
                tmpData['gameId'] = doc.id;
                if(tmpData.author === fire.auth().currentUser.email){
                    docsData.push(tmpData);
                }
                
            })
            setPostData(docsData);
            setLoadingPosts(false);
            setDisplayName(currentUser.currentUser.email)
            setLoading(false);
        }
        
        getPosts();
        
    }, [currentUser.currentUser.email]) 

    if(currentUser.currentUser == null){
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className="componentContainer"> 
        <div className="custom-container user">
           <div className="row">
               <div className="col-md-3 col-3 user__left">
                    <img className="m-5" src={img} alt="user profile logo"/>
               </div>
               <div className="col-md-9 col-9 user__right">
                   <div className="user__rightName">
                        <h2 className="m-5">{loading === true ? <Spinner /> : displayName }</h2>
                        <button className="user__button m-5"><FeatherIcon icon="edit-2" className="user__editIcon pr-1"/>Edit Profile</button>
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
                   {loadingPosts ? 
                   <h1>Loading</h1>
                :
                postData.map((post) => {
                    return(
                        <UserCommunityCard item={post}/>
                    )
                })}
                </div>
           </div>
        </div>
        </div>
    )
}

export default User