import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRwXTWlxvyFDCcNna2eF-M3v8MmxkCG4A",
  authDomain: "kk-chatting.firebaseapp.com",
  projectId: "kk-chatting",
  storageBucket: "kk-chatting.appspot.com",
  messagingSenderId: "253361460044",
  appId: "1:253361460044:web:b5cd279b0f16f16f12f5e9",
  measurementId: "G-150Z02R9MW",
};

// INIT VARIABLES
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// AUTH PROVIDERS
export const google_provider = new GoogleAuthProvider();
export const facebook_provider = new FacebookAuthProvider();
export const twitter_provider = new TwitterAuthProvider();

// FIRESTORE
export const db = getFirestore(app);
export const messages_db = collection(db, "messages");
