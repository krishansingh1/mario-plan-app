// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/app';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const fbConfig = {
  apiKey: "AIzaSyCmAv1z7qb3A2bJk8dP7ekz_tSftQe4Hn8",
  authDomain: "marioplanapp-a579e.firebaseapp.com",
  projectId: "marioplanapp-a579e",
  storageBucket: "marioplanapp-a579e.appspot.com",
  messagingSenderId: "795341672654",
  appId: "1:795341672654:web:a63e98bca872d41971c09f",
  measurementId: "G-07H0MBBG6D",
};


// Initialize Firebase
firebase.initializeApp(fbConfig);
firebase.firestore().settings({timestampsInSnapshots: true, merge:true});

export default firebase;
