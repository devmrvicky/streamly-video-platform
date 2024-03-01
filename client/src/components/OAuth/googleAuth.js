// Import the functions you need from the SDKs you need
import api from "@/axios/api";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { getErrorMsg } from "../custom/AlertDestructive";
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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleGoogleAuth = async (endPoint) => {
  console.log(auth);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const resultsFromGoogle = await signInWithPopup(auth, provider);
    // console.log(resultsFromGoogle);
    const { displayName, email, photoURL } = resultsFromGoogle.user;
    return await api.post(
      endPoint,
      // "/users/google-auth",
      { displayName, email, photoURL },
      {
        timeout: 60000,
        timeoutErrorMessage: "sorry time out",
      }
    );
  } catch (error) {
    console.log(error.message);
    const errorMessage = getErrorMsg(
      error?.response ? error.response?.data : error.message
    );
    throw new Error(errorMessage);
  }
};
