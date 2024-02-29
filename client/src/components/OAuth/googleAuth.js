// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "streamly-b20c8.firebaseapp.com",
  projectId: "streamly-b20c8",
  storageBucket: "streamly-b20c8.appspot.com",
  messagingSenderId: "686473454204",
  appId: "1:686473454204:web:fe743cf71d6465795e5ff9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
