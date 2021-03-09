import fire from '../../fire.js'
import firebase from 'firebase'

const addPost = async (content, genre, requirements) => {
    var uid = await firebase.auth().currentUser.uid;
    uid = "users/" + uid;
    await fire.firestore().collection("posts").add({
        author: uid,
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