// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRIAcSghL7jcgQ62E7WKffPdJHW7xVeRo",
  authDomain: "triptrak-2aca6.firebaseapp.com",
  projectId: "triptrak-2aca6",
  storageBucket: "triptrak-2aca6.appspot.com",
  messagingSenderId: "656185654273",
  appId: "1:656185654273:web:92f190c633b18c67a31400",
  measurementId: "G-3QVVYVPZGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
