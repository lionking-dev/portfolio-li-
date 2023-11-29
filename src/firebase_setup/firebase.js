// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwjrT3dSCZZbrS8tsFAjxQdzDEplOvs7s",
  authDomain: "portfolio-a3f10.firebaseapp.com",
  projectId: "portfolio-a3f10",
  storageBucket: "portfolio-a3f10.appspot.com",
  messagingSenderId: "260625871084",
  appId: "1:260625871084:web:85da8241d89dd19cb375c9",
  measurementId: "G-WL3BP3J3QZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);