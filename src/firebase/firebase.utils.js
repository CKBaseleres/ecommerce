import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA3Gpnwss-AUj2dD44fgRBCvcnuF1dmBu0",
  authDomain: "crwn-db-3b3fd.firebaseapp.com",
  databaseURL: "https://crwn-db-3b3fd.firebaseio.com",
  projectId: "crwn-db-3b3fd",
  storageBucket: "",
  messagingSenderId: "403038253738",
  appId: "1:403038253738:web:dff7217a64251887"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
