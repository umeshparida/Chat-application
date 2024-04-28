// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWbLjMEFIwnvo4go_vNulhbAniG3VICz4",
  authDomain: "chat-app-e83cf.firebaseapp.com",
  projectId: "chat-app-e83cf",
  storageBucket: "chat-app-e83cf.appspot.com",
  messagingSenderId: "18588167852",
  appId: "1:18588167852:web:2dbbc60b123c74740eb909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();