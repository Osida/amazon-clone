import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfKbn2QZ6Wnzcz8EB-WCVjQcTCM1Khki4",
  authDomain: "clone-a13f4.firebaseapp.com",
  projectId: "clone-a13f4",
  storageBucket: "clone-a13f4.appspot.com",
  messagingSenderId: "947956826129",
  appId: "1:947956826129:web:134228f7db407c830c31b0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
