// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV4iK8KX4CWvol_pnJ7wDOPRt1YK-R-Bg",
  authDomain: "foodvilla-d014f.firebaseapp.com",
  projectId: "foodvilla-d014f",
  storageBucket: "foodvilla-d014f.firebasestorage.app",
  messagingSenderId: "78266404258",
  appId: "1:78266404258:web:aef55f36c7a681ba5cf6fb",
  measurementId: "G-1TT8Q8YW11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
