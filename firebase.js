import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUFNwTEMjg2LjZNHIcctYvHSWyYZJWu8Y",
  authDomain: "facebook-clone-fc10c.firebaseapp.com",
  projectId: "facebook-clone-fc10c",
  storageBucket: "facebook-clone-fc10c.appspot.com",
  messagingSenderId: "186663054098",
  appId: "1:186663054098:web:00d92708cf2cdbb24ca1cb",
  measurementId: "G-2YXZS5MNVN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);