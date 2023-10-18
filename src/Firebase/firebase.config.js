// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ATHq-d8owK-Y-VczmZ7K53JFW_RcTE0",
  authDomain: "fashion-savvy.firebaseapp.com",
  projectId: "fashion-savvy",
  storageBucket: "fashion-savvy.appspot.com",
  messagingSenderId: "399962018375",
  appId: "1:399962018375:web:99eb3a7331c983899d9762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;