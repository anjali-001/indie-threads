import React from 'react';
import Login from '../../components/Login';
import addPost from '../../constants/fire-functions/addPost'

const Home = () => {

    const func = async (e) => {
        await addPost("testc", ["comedy"], "user/kesh", "windows10");
    };


    return (
        <>
            <p>Home Page</p>
            <button onClick={(e) => {func(e)}}>dfg</button>
        </>
    )
}

export default Home;