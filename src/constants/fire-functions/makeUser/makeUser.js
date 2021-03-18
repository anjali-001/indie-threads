import fire from '../../../fire.js';

const makeUser = async (username, email, uid, interests, bio, link) => {
    await fire.firestore().collection("users").doc(uid).set({
        username: username,
        email: email,
        uid: uid,
        posts: [],
        intersts: interests,
        bio: bio,
        link: link
    }).then((docRef) => {
        console.log("User added successfullly")
    }).catch((err) => {
        console.log("Error:", err);
    })
}   

export default makeUser;