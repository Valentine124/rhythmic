import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfgOU3c5FM01G47Vf4I3GwVEo69gq0Pi8",
  authDomain: "rhythmic-b53ea.firebaseapp.com",
  projectId: "rhythmic-b53ea",
  storageBucket: "rhythmic-b53ea.firebasestorage.app",
  messagingSenderId: "759215119590",
  appId: "1:759215119590:web:906acc3284ff5c18942f27",
  measurementId: "G-2RGE1W33DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };