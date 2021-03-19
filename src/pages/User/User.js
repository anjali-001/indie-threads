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

    const [userData, setUserData] = useState(null);
    const loggedIn = sessionStorage.getItem("loggedIn");


    useEffect(() => {

        if(currentUser.currentUser != null){
        
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

                const userRef = fire.firestore().collection("users");

                const getUsername = async () => {
                    
                    if(currentUser.currentUser !== null){
                    const userdata = await userRef.where("email", "==", currentUser.currentUser.email).get()
                    
                    userdata.forEach(user => {
                        setUserData(user.data());
                        setLoading(false);
                    })
                    
                    }
                }

                getUsername()
                
                setPostData(docsData);
                setLoadingPosts(false);
   
            }
            
            getPosts();

        }
        
    }, [currentUser]) 

    if(currentUser.currentUser === null && loggedIn !== null){
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
                        <h2 className="m-5">{loading === true ? <Spinner /> : userData.username }</h2>
                        <button className="user__button m-5"><FeatherIcon icon="edit-2" className="user__editIcon pr-1"/>Edit Profile</button>
                   </div>
               <div className="user__rightLink d-flex ml-5">
                    {loading === true ? <Spinner /> : 
                        <>
                            <a href={userData.link} className="d-flex">
                                    <FeatherIcon className="user__icon" icon="link"/>
                                    <p className="pl-2 pr-5">Website</p>
                            </a>
                            <a href="https://cmd.to/" className="d-flex">
                                    <FeatherIcon className="user__icon" icon="link-2"/>
                                    <p className="pl-2"> another Website</p>
                            </a>
                        </>
                    }
               </div>
               <div className="ml-5 d-flex py-2">
                   <p className="pr-2">Interests</p>
                   {
                       loading === true ? <Spinner /> : userData.interests.map((interest) => {
                           return(
                            <p key={interest} className="user__rightTag mr-3">{interest}</p>            
                           )
                       })
                   }
               </div>
               {loading === true ? <Spinner /> :<p className="ml-5">Bio: {userData.bio}</p>}
               </div>
           </div>
           <div className="user__communities">
               <h3 className="ml-5">Your Communities</h3>
               <div className="row m-5">
                   {loadingPosts ? 
                   <Spinner /> 
                :
                postData.map((post) => {
                    return(
                        <UserCommunityCard key={post.gameId} item={post}/>
                    )
                })}
                </div>
           </div>
        </div>
        </div>
    )
}

export default User