import { initializeApp } from "firebase/app";
import { keys } from "./firebase_keys";

const firebaseConfig = {
    apiKey: keys.API_KEY,
    authDomain: keys.AUTH_DOMAIN,
    projectId: keys.PROJECT_ID,
    storageBucket: keys.STORAGE_BUCKET,
    messagingSenderId: keys.MESSAGE_SENDER_ID,
    appId: keys.APP_ID,
    measurementId: keys.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);