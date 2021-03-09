import fire from '../../../fire.js'
import firebase from 'firebase'

const makeUser = async (username, email, uid) => {
    await fire.firestore().collection("users").doc(uid).set({
        username: username,
        email: email,
        uid: uid,
        posts: []
    }).then((docRef) => {
        console.log("User added successfullly")
    }).catch((err) => {
        console.log("Error:", err);
    })
}   

export default makeUser;