import fire from '../../fire.js'
import firebase from 'firebase'

const addPost = async (username, email, uid) => {
    await fire.firestore().collection("users").add({
        username: username,
        email: email,
        uid: uid,
    }).then((docRef) => {
        console.log("User added successfullly")
    }).catch((err) => {
        console.log("Error:", err);
    })
}   

export default addPost;