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
  apiKey: "AIzaSyBY2-TlR_sO_XkBvI1KinNvjcCtWbKKziE",
  authDomain: "office-hour-queue-48ce8.firebaseapp.com",
  projectId: "office-hour-queue-48ce8",
  storageBucket: "office-hour-queue-48ce8.appspot.com",
  messagingSenderId: "123869606981",
  appId: "1:123869606981:web:b4f3dcbbbe469a6d09df2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// connections to Firebase
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



export default firebaseConfig;