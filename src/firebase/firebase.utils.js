import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDSmerJkhcPTCIZCbemDCS3uKIJti7xYR0",
  authDomain: "crwn-db-b4dcd.firebaseapp.com",
  databaseURL: "https://crwn-db-b4dcd.firebaseio.com",
  projectId: "crwn-db-b4dcd",
  storageBucket: "crwn-db-b4dcd.appspot.com",
  messagingSenderId: "6021029880",
  appId: "1:6021029880:web:e79f45545a9697786a000d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
