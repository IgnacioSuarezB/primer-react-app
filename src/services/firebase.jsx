import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3rBO3bGmD24T_wspCwEDUn6hiQ_iFD3w",
  authDomain: "e-commerce-coderhouse-69b49.firebaseapp.com",
  projectId: "e-commerce-coderhouse-69b49",
  storageBucket: "e-commerce-coderhouse-69b49.appspot.com",
  messagingSenderId: "1091591547497",
  appId: "1:1091591547497:web:7842113fda12a7d98d50f8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
