// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOO_R-lP-IURFDNv8E7gd1V6bQKH1VKfg",
  authDomain: "office-hour-queue-8e34d.firebaseapp.com",
  projectId: "office-hour-queue-8e34d",
  storageBucket: "office-hour-queue-8e34d.appspot.com",
  messagingSenderId: "698384809670",
  appId: "1:698384809670:web:d76f83ca4ee9760c69e1c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// connections to Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



export default firebaseConfig;