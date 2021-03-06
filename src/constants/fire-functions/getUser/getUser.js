import fire from '../../../fire.js';
import firebase from 'firebase';

const getUser = async () => {

    var userUID = await firebase.auth();
    userUID = userUID.currentUser.uid
    var result = null;
    var docRef = await fire.firestore().collection("users").doc(userUID);
    await docRef.get().then((doc) => {
        result = doc.data();
        return result;
    }).catch((error) => {
        console.log("User doesn't exist!", error);
        return null;
    })
    return result
}   

export default getUser;