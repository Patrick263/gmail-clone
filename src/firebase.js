import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyATnmk9xtOK4B_f5OhHOfCRpTfpPA5742s",
    authDomain: "clone-e2331.firebaseapp.com",
    projectId: "clone-e2331",
    storageBucket: "clone-e2331.appspot.com",
    messagingSenderId: "530336195074",
    appId: "1:530336195074:web:450d6094f38f16288e3d1b",
    measurementId: "G-7BJYMMWBL6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new GoogleAuthProvider();

  export{ db, auth,provider };