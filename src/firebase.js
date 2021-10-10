import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCOEXRC37RryaxYi7FfH4XylcE7VJYFuAE",
  authDomain: "alaadev-fc84a.firebaseapp.com",
  projectId: "alaadev-fc84a",
  storageBucket: "alaadev-fc84a.appspot.com",
  messagingSenderId: "341642211530",
  appId: "1:341642211530:web:ed2319aea14fe0184d0433",
  measurementId: "G-YXFRWS03X3",
});

// eslint-disable-next-line no-undef
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
