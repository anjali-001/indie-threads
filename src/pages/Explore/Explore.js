import React, { useState, useEffect } from 'react';
import './Explore.css'
import getPosts from '../../constants/fire-functions/getPosts'

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
        <div className="explore-container">
            {data.map((doc) => {
                return(
                    <h1>sdf</h1>
                )
            })}
        </div>
    )
}

export default Explore;