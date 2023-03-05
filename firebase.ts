import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAs3mOQhX1tR2gvEkBtkCClYoajGTWAP_s",
    authDomain: "chatgpt-clone-50052.firebaseapp.com",
    projectId: "chatgpt-clone-50052",
    storageBucket: "chatgpt-clone-50052.appspot.com",
    messagingSenderId: "367237983631",
    appId: "1:367237983631:web:3f9f83ba237e2d5f6aaffa",
    measurementId: "G-9RTLKR7R0J"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
