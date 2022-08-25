import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA5UXPbTuZ7MazZ2ShLWfwGwc7YuXVXCAE",
  authDomain: "wp-clone-16076.firebaseapp.com",
  projectId: "wp-clone-16076",
  storageBucket: "wp-clone-16076.appspot.com",
  messagingSenderId: "151892634397",
  appId: "1:151892634397:web:e9c752e22f32ea63dc4ff4",
  measurementId: "G-S4MDBLM3NE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
