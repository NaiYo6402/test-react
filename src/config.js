// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDAW5lT1LtH1srrxN9mR4tX2LuOMhhCMmU",
  authDomain: "testproj-reacte.firebaseapp.com",
  projectId: "testproj-reacte",
  storageBucket: "testproj-reacte.appspot.com",
  messagingSenderId: "672703184997",
  appId: "1:672703184997:web:c3159dde4bea058285468c",
  measurementId: "G-JXZHS51X52"
});

export default firebaseConfig; 