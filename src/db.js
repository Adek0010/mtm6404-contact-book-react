// db.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC6XXvPXbhSG0q9RlL6O2uNmnrVPc9jf8U",
  authDomain: "contacts-c150e.firebaseapp.com",
  projectId: "contacts-c150e",
  storageBucket: "contacts-c150e.appspot.com",
  messagingSenderId: "359934164770",
  appId: "1:359934164770:web:1c84098e56431d987cef7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);

export default db;