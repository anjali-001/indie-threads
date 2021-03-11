import fire from '../../../fire.js'
import firebase from 'firebase'

const getPosts = async () => {
    var data = [];
    await fire.firestore().collection("posts").get().then((docs) => {
        docs.forEach((doc) => {
            data.push(doc.data())
        });
        
    }).catch((error) => {
        console.log("User doesn't exist!", error);
        return null;
    })
    return data;
}   

export default getPosts;