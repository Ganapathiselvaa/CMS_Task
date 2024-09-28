// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT-94xy_tOHxKfDdE7ILS3ix2K54g02Xo",
  authDomain: "otpmobile-b3092.firebaseapp.com",
  projectId: "otpmobile-b3092",
  storageBucket: "otpmobile-b3092.appspot.com",
  messagingSenderId: "795283100246",
  appId: "1:795283100246:web:5b8e30404e363d4e4e61f7",
  measurementId: "G-SR0DGC0W9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
