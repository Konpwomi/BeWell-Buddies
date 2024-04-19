// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARNUAnclp_pX7B2YXq9Kg1eRNVvn0K3dw",
  authDomain: "bewell-buddies.firebaseapp.com",
  projectId: "bewell-buddies",
  storageBucket: "bewell-buddies.appspot.com",
  messagingSenderId: "584001720024",
  appId: "1:584001720024:web:c7607f427505f8a8c0d1ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)