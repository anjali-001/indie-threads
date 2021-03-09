import React from 'react';
import firebase from 'firebase'
import fire from '../../fire'

const Home = () => {

    const func = async (e) => {
        e.preventDefault();
        const db = fire.firestore()
        const log = await db.collection("posts").add({
            testing: "hello"
        }).then((doc) => {
            console.log("doc uploaded")
        }).catch(err => {
            console.log(err);
        })
        console.log(log);
    };


    return (
        <>
            <p>Home Page</p>
            <button onClick={(e) => {func(e)}}>dfg</button>
        </>
    )
}

export default Home;