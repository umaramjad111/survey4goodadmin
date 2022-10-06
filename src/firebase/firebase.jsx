import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCfxPLT6-FkZQtP5ENEs7v5E2UTKgc06VI",
  authDomain: "survey-4-good.firebaseapp.com",
  databaseURL: "https://survey-4-good-default-rtdb.firebaseio.com",
  projectId: "survey-4-good",
  storageBucket: "survey-4-good.appspot.com",
  messagingSenderId: "838488363535",
  // credential: applicationDefault(),
  appId: "1:838488363535:web:0c629f9173b56d89f0097a",
  measurementId: "G-22Q7H2P6V3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
