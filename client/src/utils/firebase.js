import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-544dc.firebaseapp.com",
  projectId: "interviewiq-544dc",
  storageBucket: "interviewiq-544dc.firebasestorage.app",
  messagingSenderId: "710330189245",
  appId: "1:710330189245:web:cd6009e5c52ffec1b9bed4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}