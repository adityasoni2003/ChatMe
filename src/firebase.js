import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBHNmQcxqEbuYJOK1MMI6mpd8euywAQVvE",
  authDomain: "chatme-c7fe5.firebaseapp.com",
  projectId: "chatme-c7fe5",
  storageBucket: "chatme-c7fe5.appspot.com",
  messagingSenderId: "373186256873",
  appId: "1:373186256873:web:99a734342d533fb6907578"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const storage = getStorage();
export const db = getFirestore();


