import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVeXnSuyzwgQysPNdbJnrPcJwp6xlUc_A",
  authDomain: "chats1-48cd4.firebaseapp.com",
  projectId: "chats1-48cd4",
  storageBucket: "chats1-48cd4.appspot.com",
  messagingSenderId: "391629974472",
  appId: "1:391629974472:web:2e5a386e0fb4d496a46efd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();