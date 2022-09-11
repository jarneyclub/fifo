import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from './config';

const Firebase = firebase.initializeApp(firebaseConfig);

// Add or Remove authentification methods here.
export const Providers = {
    google: new firebase.auth.GoogleAuthProvider()
};

export const auth = firebase.auth();
export default Firebase;