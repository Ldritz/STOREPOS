// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

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
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db)
  .catch((err) => {
    if (err.code == 'failed-precondition') {
      // This can happen if multiple tabs are open.
      console.warn('Firebase persistence failed: Only one tab can have persistence enabled at a time.');
    } else if (err.code == 'unimplemented') {
      // The browser is not supported.
      console.error('Firebase persistence is not supported in this browser.');
    }
  });

export { db };
