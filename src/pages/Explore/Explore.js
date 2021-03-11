import React, { useState, useEffect } from 'react';
import './Explore.css'
import getPosts from '../../constants/fire-functions/getPosts'
import PostCard from '../../components/PostCard'
import Filter from '../../components/Filter';

const Explore = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        async function getData(){
            const response = await getPosts();
            setData(response)
        }
        getData();
    }, [])

    if (data == []){
        return( 
        <div className="explore-container">
            <h1>sdf</h1>
        </div>
        )
    }
    return (
        <div className="explore componentContainer">
            <div className="custom-container">
            
                <div className="row justify-content-around">
                    <div className="col-md-8 col-8 text-light explore__left">
                    <h1 className="explore-heading">Active Communities</h1>
                    {data.map((post) => {
                        return(
                            <PostCard />
                        )
                    })}
                    </div>
                    <div className="col-md-4 filt-container">
                        <Filter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore;