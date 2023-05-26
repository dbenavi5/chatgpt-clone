import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDBSqqw9xKHg_6uBl5QMUxWVvUG7BGLc2I",
    authDomain: "chatgpt-clone-50052.firebaseapp.com",
    projectId: "chatgpt-clone-50052",
    storageBucket: "chatgpt-clone-50052.appspot.com",
    messagingSenderId: "367237983631",
    appId: "1:367237983631:web:e1f66d92de909dfd6aaffa",
    measurementId: "G-2LNC2HJGV9"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db };
