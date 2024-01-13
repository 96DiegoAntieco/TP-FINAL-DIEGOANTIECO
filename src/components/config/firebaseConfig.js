// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB8U50qYIz07nKdf7GJKS9I8V0ftx8svlY",
  authDomain: "ecommerce-58180.firebaseapp.com",
  projectId: "ecommerce-58180",
  storageBucket: "ecommerce-58180.appspot.com",
  messagingSenderId: "948921364296",
  appId: "1:948921364296:web:0b3623411058ece2de8d7d",
  measurementId: "G-LM0MGJ8Z2S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
