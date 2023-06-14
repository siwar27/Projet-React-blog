// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDY7Ye8vtmsSMghsvfIDV5lgFTomjjfZuc",
  authDomain: "blog-1b335.firebaseapp.com",
  projectId: "blog-1b335",
  storageBucket: "blog-1b335.appspot.com",
  messagingSenderId: "180905566063",
  appId: "1:180905566063:web:ae4892e2d6b25765b5529a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth();
export const provider = new GoogleAuthProvider(); 