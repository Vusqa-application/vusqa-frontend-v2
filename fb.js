import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';
import { mapMutations } from 'vuex';

var firebaseConfig = {
  apiKey: "AIzaSyB1xke8gL3m_b9jGNdbS4CY0to2Cplna4o",
  authDomain: "vusqa-app.firebaseapp.com",
  databaseURL: "https://vusqa-app.firebaseio.com",
  projectId: "vusqa-app",
  // storageBucket: "vusqa-app.appspot.com",
  // messagingSenderId: "531671336346",
  // appId: "1:531671336346:web:a3f9644b3bfde9df13a623",
  // measurementId: "G-YT33VSKRN1"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  
}
const db = firebase.firestore();
const auth = firebase.auth();
const functions = firebase.functions();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, functions };