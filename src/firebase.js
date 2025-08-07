// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBkDfT7WoW8dmnAXYaXnhHQA_LzJR3-EF4",
  authDomain: "eco-harvest-b1034.firebaseapp.com",
  projectId: "eco-harvest-b1034",
  storageBucket: "eco-harvest-b1034.firebasestorage.app",
  messagingSenderId: "173446507431",
  appId: "1:173446507431:web:94168876f56cf5ee806482",
  measurementId: "G-PN8FVHLW1V"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
