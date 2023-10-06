// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOnSCbsRDKrLTDwxQZKzPmCVlFNeKmKZM",
  authDomain: "react-router-career-hub.firebaseapp.com",
  projectId: "react-router-career-hub",
  storageBucket: "react-router-career-hub.appspot.com",
  messagingSenderId: "938088034289",
  appId: "1:938088034289:web:7e134e3199cc23a62e5e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;