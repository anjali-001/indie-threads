import fire from '../../../fire.js';

const getPosts = async (gameId) => {

    var data = [];
    await fire.firestore().collection("posts").get().then((docs) => {
        docs.forEach((doc) => {
            if(gameId !== null){
                if(gameId === doc.id){
                    data.push(doc.data());
                    return {user: doc.data()};
                }
            }
            data.push(doc.data())
        });
        
    }).catch((error) => {
        console.log("User doesn't exist!", error);
        return null;
    })
    return data;
}   

export default getPosts;