import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCvCOUEVpPMwIpkH5XOBSMKICGRpy87Mxs",
    authDomain: "think-piece-bed43.firebaseapp.com",
    projectId: "think-piece-bed43",
    storageBucket: "think-piece-bed43.appspot.com",
    messagingSenderId: "1005673262630",
    appId: "1:1005673262630:web:9615e0a0653514076f00e7",
    measurementId: "G-FG2PVPEX02"
  };

  firebase.initializeApp(config);

  window.firebase = firebase;

  export default firebase;