// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  AuthDomain: "YOUR_PROJECT_AUTH_DOMAIN",
  databaseURL: "YOUR_PROJECT_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_STORAGE_BUCKET",
  messagingSenderId: "YOUR_PROJECT_MESSAGING_SENDER_ID",
  appId: "YOUR_PROJECT_APP_ID"
});

 const db = firebaseApp.firestore();
 const provider = new firebase.auth.GoogleAuthProvider();
 const auth = firebase.auth();

 export default db;
 export {auth, provider};
