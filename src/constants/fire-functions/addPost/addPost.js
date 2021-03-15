import fire from '../../../fire.js'
import firebase from 'firebase'

const addPost = async (content, genre, requirements) => {
    var uid = await firebase.auth().currentUser.uid;
    var setuid = "users/" + uid;
    await fire.firestore().collection("posts").add({
        author: setuid,
        genre: genre,
        sysRequirements: requirements,
        content: content
    }).then((docRef) => {
        var posts = null
        fire.firestore().collection("users").doc(uid).get().then((doc) => {
            posts = doc.data().posts;
             var updatedPosts = [...posts]
             updatedPosts.push(docRef)
            //  console.log(updatedPosts)
            fire.firestore().collection("users").doc(uid).update({
                posts: updatedPosts
            })
        })
        
        console.log("Post added successfullly")
    }).catch((err) => {
        console.log("Error:", err);
    })
}   

export default addPost;