// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdHbJaWllI15RVA8Sp-v7o2kdxI4Hk4Jo",
  authDomain: "netflixgpt-12575.firebaseapp.com",
  projectId: "netflixgpt-12575",
  storageBucket: "netflixgpt-12575.firebasestorage.app",
  messagingSenderId: "524720135466",
  appId: "1:524720135466:web:ca08f1a13b8029f1f41253",
  measurementId: "G-9J8GSFDR45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();