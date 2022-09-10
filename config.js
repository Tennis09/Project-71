import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCLM3YBCvpvhg3doP1Vf8QCh--gC-Wv5IY",
    authDomain: "project71-8d306.firebaseapp.com",
    projectId: "project71-8d306",
    storageBucket: "project71-8d306.appspot.com",
    messagingSenderId: "600454327056",
    appId: "1:600454327056:web:b312eae369bd0f0ea29395"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
