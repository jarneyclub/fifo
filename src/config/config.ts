// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmWyPhV-NWWCxFROYdBP7EUbClRS2WEKA",
  authDomain: "jarney.firebaseapp.com",
  projectId: "jarney",
  storageBucket: "jarney.appspot.com",
  messagingSenderId: "1039867996883",
  appId: "1:1039867996883:web:41c5315623ff699ca44226",
  measurementId: "G-KV20JRRNWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// connections to Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default firebaseConfig;