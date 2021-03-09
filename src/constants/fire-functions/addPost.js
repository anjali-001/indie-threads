import fire from '../../fire.js'
import firebase from 'firebase'

function addPost(content, genre, authorRef, requirements){
    fire.firestore().collection("posts").add({
        author: authorRef,
        genre: genre.split(","),
        sysRequirements: requirements,
        content: content
    }).then((docRef) => {
        console.log("Post added successfullly")
    }).catch((err) => {
        console.log("Error:", err);
    })
}   

addPost("testc", "comedy", "user/kesh", "windows10");