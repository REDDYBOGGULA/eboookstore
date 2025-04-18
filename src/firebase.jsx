// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDij1fqbI0qlUD3VLDApTpNKeGDkmUavjU",
  authDomain: "new-react-app-d72a4.firebaseapp.com",
  projectId: "new-react-app-d72a4",
  storageBucket: "new-react-app-d72a4.firebasestorage.app",
  databaseURL: "https://new-react-app-d72a4-default-rtdb.firebaseio.com/",
  messagingSenderId: "296196591790",
  appId: "1:296196591790:web:ea354d96e7cdf7ef005d3f",
  measurementId: "G-ZKMLQ897YJ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth & Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Export all needed Firebase instances
export { auth, googleProvider, app };
