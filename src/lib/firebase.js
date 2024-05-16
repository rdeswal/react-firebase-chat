import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey : import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-76416.firebaseapp.com",
  projectId: "reactchat-76416",
  storageBucket: "reactchat-76416.appspot.com",
  messagingSenderId: "620310820565",
  appId: "1:620310820565:web:f773ada6ce20833e2b545c"
};

const app = initializeApp(firebaseConfig);  

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();