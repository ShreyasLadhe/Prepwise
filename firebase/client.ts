// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-p8_0Sh1UkdddC3YyCU31uy-w9ypw8Jk",
    authDomain: "prepwise-db7dc.firebaseapp.com",
    projectId: "prepwise-db7dc",
    storageBucket: "prepwise-db7dc.firebasestorage.app",
    messagingSenderId: "235437043256",
    appId: "1:235437043256:web:3e3b6321aa09733abac0cd",
    measurementId: "G-X8D8WC7YFV"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export  const auth = getAuth(app);
export const db = getFirestore(app);