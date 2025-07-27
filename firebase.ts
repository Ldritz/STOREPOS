// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, persistentLocalCache } from "firebase/firestore";

// Your web app's Firebase configuration, as provided
const firebaseConfig = {
  apiKey: "AIzaSyBFOBEGWvfdQ_-8TgBtpG1-ccViyTQevSc",
  authDomain: "olsc-agrifeeds-trading.firebaseapp.com",
  projectId: "olsc-agrifeeds-trading",
  storageBucket: "olsc-agrifeeds-trading.firebasestorage.app",
  messagingSenderId: "188615089972",
  appId: "1:188615089972:web:e1311c138055bbddfccf61",
  measurementId: "G-ESY5FJM316"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db;

try {
    // Initialize Firestore with offline persistence using the recommended `initializeFirestore` function.
    // This replaces `enableIndexedDbPersistence` and resolves the deprecation warning.
    db = initializeFirestore(app, {
        localCache: persistentLocalCache({}),
    });
} catch (err: any) {
    if (err.code === 'failed-precondition') {
        console.warn('Firebase persistence failed: This can happen if multiple tabs are open. Falling back to memory-only cache.');
    } else if (err.code === 'unimplemented') {
        console.error('Firebase persistence is not supported in this browser. Falling back to memory-only cache.');
    } else {
        console.error(`An error occurred while initializing Firestore with persistence: ${err.message}`);
    }
    // Fallback to in-memory-only persistence if initialization with persistence fails.
    db = getFirestore(app);
}

export { db };