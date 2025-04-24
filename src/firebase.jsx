// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  browserSessionPersistence,
  setPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuyYiTmo1TIQPYfTS_CekoweXN6hRa3NY",
  authDomain: "react-app-5aa9b.firebaseapp.com",
  databaseURL: "https://react-app-5aa9b-default-rtdb.firebaseio.com",
  projectId: "react-app-5aa9b",
  storageBucket: "react-app-5aa9b.firebasestorage.app",
  messagingSenderId: "62422622220",
  appId: "1:62422622220:web:60d49d483dcf616a2b0e29",
  measurementId: "G-TPYVLQ64VK"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// 🔐 Set auth with session-only persistence
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, app };
