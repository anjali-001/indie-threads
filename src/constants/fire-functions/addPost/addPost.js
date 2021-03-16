import fire from '../../../fire.js'
import firebase from 'firebase'

const addPost = async (title, desc, genre, developer, relDate, link, video, pictures, sysreq, platforms) => {
    var uid = await firebase.auth().currentUser.uid;
    var setuid = "users/" + uid;
    await fire.firestore().collection("posts").add({
        author: setuid,
        title: title,
        genre: genre,
        systemRequirements: sysreq,
        developer: developer,
        description: desc,
        platformsAvailable: platforms,
        releaseDate: relDate,
        website: link,
        gameplayVideos: video,
        gameplayImages: pictures,
        createdAt: new Date()
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