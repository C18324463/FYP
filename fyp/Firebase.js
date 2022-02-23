// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkHY6Agr5tyg4F2Rl0gpzdoSYJ9QGXW2c",
  authDomain: "formula-1-website.firebaseapp.com",
  databaseURL: "https://formula-1-website-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "formula-1-website",
  storageBucket: "formula-1-website.appspot.com",
  messagingSenderId: "916207284027",
  appId: "1:916207284027:web:209226694982cf79d0511e",
  measurementId: "G-02WVFZGZTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);