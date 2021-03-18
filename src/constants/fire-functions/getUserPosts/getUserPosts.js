import fire from '../../../fire.js'
import firebase from 'firebase'

const getUserPosts = async () => {

    var userUID = await firebase.auth().currentUser.uid
    var result = [];
    await fire.firestore().collection("posts").where("author", "==", "user/" + userUID).get().then((docs) => {
        console.log("hi")
        docs.forEach((doc) => {
            console.log(doc.data())
            result.push(doc.data())
        });
        return result
    }).catch((error) => {
        console.log("User doesn't exist!", error);
        return null;
    })
    return result;
}   

export default getUserPosts;