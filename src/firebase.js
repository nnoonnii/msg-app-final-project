// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBbvto3scfcbO6x0KY5YBEfahJWIbk1BA",
    authDomain: "messenger-by-lau.firebaseapp.com",
    projectId: "messenger-by-lau",
    storageBucket: "messenger-by-lau.appspot.com",
    messagingSenderId: "795244528445",
    appId: "1:795244528445:web:74b4ad0554200e5b65fb54",
    measurementId: "G-5VKCFY6SZZ"
 });

 const db = firebaseApp.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 const auth = firebase.auth();

 export default db;
 export {auth, provider};
