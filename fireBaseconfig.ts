import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHIdiXThFl-vSR6FuuKAj0q1eHh3eK51k",
  authDomain: "atividade1403.firebaseapp.com",
  projectId: "atividade1403",
  storageBucket: "atividade1403.appspot.com",
  messagingSenderId: "177034528170",
  appId: "1:177034528170:web:2fd2333c48ac5f221757d3"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
