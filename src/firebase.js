import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAezm5jSNZdFroKAxHkDR3W_gKI3cEaWuU",
  authDomain: "weathermap-4f1e6.firebaseapp.com",
  databaseURL: "https://weathermap-4f1e6.firebaseio.com",
  projectId: "weathermap-4f1e6",
  storageBucket: "weathermap-4f1e6.appspot.com",
  messagingSenderId: "944740193705",
  appId: "1:944740193705:web:aa921dc73ab67a8c26a0b8"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
export default db;
