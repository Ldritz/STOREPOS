import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration has been applied.
// This connects the app to your personal Firebase project, enabling real-time data sync.
const firebaseConfig = {
  apiKey: "AIzaSyDjvWwOkoNaPEXU7rpwEPMyrcGffuKsY3o",
  authDomain: "agri-pos-ac72d.firebaseapp.com",
  databaseURL: "https://agri-pos-ac72d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agri-pos-ac72d",
  storageBucket: "agri-pos-ac72d.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "1001942723938",
  appId: "1:1001942723938:web:e98c65f3c07ca153d8903b",
  measurementId: "G-MHNHNHHJH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore with multi-tab persistence enabled using the recommended API.
// This replaces the deprecated enableMultiTabIndexedDbPersistence(). The new API handles
// initialization failures (e.g., unsupported browser) more gracefully by falling back
// to in-memory persistence and logging a console warning.
const db = initializeFirestore(app, {
    localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

export { db };