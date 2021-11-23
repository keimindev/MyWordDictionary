import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mywordsdictionary-800cf.firebaseapp.com",
  projectId: "mywordsdictionary-800cf",
  storageBucket: "mywordsdictionary-800cf.appspot.com",
  messagingSenderId: "434391499571",
  appId: "1:434391499571:web:0608b860132feb5494b446"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db}