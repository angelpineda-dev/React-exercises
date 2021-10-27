import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRS-8KnUzQWyubl8qGo1F_W2uCCmEnNIs",
  authDomain: "react-app-cursos-d3ec2.firebaseapp.com",
  projectId: "react-app-cursos-d3ec2",
  storageBucket: "react-app-cursos-d3ec2.appspot.com",
  messagingSenderId: "477220086323",
  appId: "1:477220086323:web:a9de798de195c6f3afb946",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider, app };
