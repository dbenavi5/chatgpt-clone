import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "chatgpt-clone-50052.firebaseapp.com",
    projectId: "chatgpt-clone-50052",
    storageBucket: "chatgpt-clone-50052.appspot.com",
    messagingSenderId: "367237983631",
    appId: "1:367237983631:web:1fd3751c995fa0ef6aaffa",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
