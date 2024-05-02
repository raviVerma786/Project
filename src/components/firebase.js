import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCLunp5Vmjq_AnksUPdFpTv9ivxwy2sjBU",
  authDomain: "avinya-67191.firebaseapp.com",
  projectId: "avinya-67191",
  storageBucket: "avinya-67191.appspot.com",
  messagingSenderId: "715133583163",
  appId: "1:715133583163:web:37f78b17846112307c411e",
  measurementId: "G-TFHWSDQLWH",
  databaseURL:"https://avinya-67191-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fileDb = getStorage(app);
export const auth = getAuth(app);
export const db = getDatabase(app);