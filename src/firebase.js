// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkGjOwcyrpG5ePt2b-Qwz9D5yg1X4fMY4",
  authDomain: "clone-5730e.firebaseapp.com",
  projectId: "clone-5730e",
  storageBucket: "clone-5730e.appspot.com",
  messagingSenderId: "652865238349",
  appId: "1:652865238349:web:1d272d6dea848cf4727304",
  measurementId: "G-G7QF0EJ028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };