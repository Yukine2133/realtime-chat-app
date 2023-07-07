import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtT7P4YNdRi8xEBxEgRxDQbSL7q78nFBw",
  authDomain: "chatapp-f1a16.firebaseapp.com",
  projectId: "chatapp-f1a16",
  storageBucket: "chatapp-f1a16.appspot.com",
  messagingSenderId: "969939092096",
  appId: "1:969939092096:web:4da92ddd1b324773651c65",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
