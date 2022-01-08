import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCvCOUEVpPMwIpkH5XOBSMKICGRpy87Mxs",
    authDomain: "think-piece-bed43.firebaseapp.com",
    projectId: "think-piece-bed43",
    storageBucket: "think-piece-bed43.appspot.com",
    messagingSenderId: "1005673262630",
    appId: "1:1005673262630:web:9615e0a0653514076f00e7",
    measurementId: "G-FG2PVPEX02"
  };

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  window.firebase = firebase;

  export default firebase;