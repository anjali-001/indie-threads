import firebase from 'firebase'
//require("firebase/firestore");

// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
//     measurementId: process.env.REACT_APP_measurementId
//   };
var firebaseConfig = {
  apiKey: "AIzaSyDs4BphNwsc1otwpNmMw194rDwsH6x2n4A",
  authDomain: "indie-threads.firebaseapp.com",
  projectId: "indie-threads",
  storageBucket: "indie-threads.appspot.com",
  messagingSenderId: "229278195215",
  appId: "1:229278195215:web:2b0da9edb323ab355ccd7a",
  measurementId: "G-B9P776EL8X"
};

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);


export default fire;