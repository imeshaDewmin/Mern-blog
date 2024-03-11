// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-596b0.firebaseapp.com",
  projectId: "mern-blog-596b0",
  storageBucket: "mern-blog-596b0.appspot.com",
  messagingSenderId: "527485688398",
  appId: "1:527485688398:web:4727cd883c4aff27b3411f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

