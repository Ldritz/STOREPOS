import { initializeApp } from "@firebase/app";
import { initializeFirestore, persistentLocalCache } from "@firebase/firestore";

// Your web app's Firebase configuration is loaded from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence.
// This method tries to enable persistence and falls back to memory cache if it fails.
// Warnings for failure conditions are automatically logged by the SDK.
export const db = initializeFirestore(app, {
    localCache: persistentLocalCache({})
});