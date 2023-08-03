// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4x8LKg5Y1_gQFRymqvDuQTofOdtmeY0o",
  authDomain: "expense-tracker-webapp-47471.firebaseapp.com",
  projectId: "expense-tracker-webapp-47471",
  storageBucket: "expense-tracker-webapp-47471.appspot.com",
  messagingSenderId: "88822475887",
  appId: "1:88822475887:web:829e1ef2c69190aa88319a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}