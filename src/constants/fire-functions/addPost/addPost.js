import fire from '../../../fire.js';
import firebase from 'firebase';

const addPost = async (title, desc, genre, developer, relDate, link, video, pictures, sysreq, platforms) => {
    var author = await firebase.auth().currentUser.email;
    
    await fire.firestore().collection("posts").add({
        author: author,
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
    })
    .then((docRef) => {

        // Returns and logs null

    }).catch((err) => {
        console.log("Error:", err);
    })
}   

export default addPost;