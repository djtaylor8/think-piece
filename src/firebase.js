import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

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
  export const storage = firebase.storage();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  window.firebase = firebase;

  export const createUserProfileDocument = async (user, additionalData) => {
      if (!user) return;

      //Get a reference to the place in the database where the user exists
      const userRef = firestore.doc(`/users/${user.uid}`);
    
      //Go and fetch the document from that location
      const snapshot = await userRef.get();

      if (!snapshot.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.error('Error creating user', error.message);
        }
      }

      return getUserDocument(user.uid);
    }

    export const getUserDocument = async uid => {
        if (!uid) return null;

        try {
          return firestore.collection('users').doc(uid);
        } catch (error) {
            console.error('Error fetching user', error.message)
        }
    }

  export default firebase;