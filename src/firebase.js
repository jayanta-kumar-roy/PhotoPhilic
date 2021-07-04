import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCyAe-UIm-wOQXJDborkOCpY2WiiAuYD9c",
  authDomain: "instagram-clone-react-9a927.firebaseapp.com",
  projectId: "instagram-clone-react-9a927",
  storageBucket: "instagram-clone-react-9a927.appspot.com",
  messagingSenderId: "908959272458",
  appId: "1:908959272458:web:4fb209353f43574ce499f3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
