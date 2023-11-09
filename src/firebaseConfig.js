// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl20trEoDPqRad6zXq_WoArenMtWA6jm4",
  authDomain: "authemail-c530f.firebaseapp.com",
  projectId: "authemail-c530f",
  storageBucket: "authemail-c530f.appspot.com",
  messagingSenderId: "928805673961",
  appId: "1:928805673961:web:2c735f5cde3efcb3668978",
  measurementId: "G-XZH05J62SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }