import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCXptXqlJ5XMtJxFma-RCtARegjFbq0WI",
  authDomain: "my-portfolio-9fb2c.firebaseapp.com",
  projectId: "my-portfolio-9fb2c",
  storageBucket: "my-portfolio-9fb2c.appspot.com",
  messagingSenderId: "986674190287",
  appId: "1:986674190287:web:7b15c7184c1aab7327a4ba",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
