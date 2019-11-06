import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD2zJ-KqsTKh01McfL6pLx2vCoYOm8PN0Q",
  authDomain: "crwn-db-53adb.firebaseapp.com",
  databaseURL: "https://crwn-db-53adb.firebaseio.com",
  projectId: "crwn-db-53adb",
  storageBucket: "crwn-db-53adb.appspot.com",
  messagingSenderId: "371832710644",
  appId: "1:371832710644:web:fb08d9e7fa9bba33a9c5a1",
  measurementId: "G-7YRYQ69D4K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
