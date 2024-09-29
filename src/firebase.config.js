// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0XERcv4PB4U4EKCtzEUxTQeGkdcP1u0M",
  authDomain: "otpmobile-e1141.firebaseapp.com",
  projectId: "otpmobile-e1141",
  storageBucket: "otpmobile-e1141.appspot.com",
  messagingSenderId: "1045058791736",
  appId: "1:1045058791736:web:b70f02ca55eb1555d1b9cd",
  measurementId: "G-KR2JC0FY5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
