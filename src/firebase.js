import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mywords-d9ff1.firebaseapp.com",
  projectId: "mywords-d9ff1",
  storageBucket: "mywords-d9ff1.appspot.com",
  messagingSenderId: "953271036756",
  appId: "1:953271036756:web:dd67af4086c23bcae436c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db}