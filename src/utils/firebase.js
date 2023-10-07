// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "opiblog.firebaseapp.com",
  projectId: "opiblog",
  storageBucket: "opiblog.appspot.com",
  messagingSenderId: "542624033980",
  appId: "1:542624033980:web:dff43e45e762b3b20734b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);