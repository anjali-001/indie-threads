import fire from '../../fire.js'
import firebase from 'firebase'

const addPost = async (content, genre, authorRef, requirements) => {
    await fire.firestore().collection("posts").add({
        author: authorRef,
        genre: genre,
        sysRequirements: requirements,
        content: content
    }).then((docRef) => {
        console.log("Post added successfullly")
    }).catch((err) => {
        console.log("Error:", err);
    })
}   

export default addPost;