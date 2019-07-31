import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "[apiKey]",
    authDomain: "[authDomain]",
    databaseURL: "[databaseURL]",
    projectId: "[projectId]",
    storageBucket: "",
    messagingSenderId: "[messagingSenderId]",
    appId: "[appId]"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
