// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdvUSprO9-ONCpGaqGU59MVHzAvNPAE9Q",
  authDomain: "webauth-113e9.firebaseapp.com",
  projectId: "webauth-113e9",
  storageBucket: "webauth-113e9.firebasestorage.app",
  messagingSenderId: "225850365030",
  appId: "1:225850365030:web:53872d9b22f10560d509a7",
  measurementId: "G-69ZWQ76WY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
