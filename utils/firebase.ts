import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBzz6mJlqDSEVhnRTtEWjEJP5s7LltrJNw",
  authDomain: "habits-tracker-64bd3.firebaseapp.com",
  projectId: "habits-tracker-64bd3",
  storageBucket: "habits-tracker-64bd3.appspot.com",
  messagingSenderId: "1063017092589",
  appId: "1:1063017092589:web:acd188eb11f11a7c87c3e4",
  measurementId: "G-D8N257CRW3",
};

// Initialize Firebase
export const firebaseApp = initializeApp(config);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
