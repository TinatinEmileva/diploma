// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvuYRwBWfxNXjvgvgyHS3rn12Nq4WavF0",
  authDomain: "diploma-57e14.firebaseapp.com",
  projectId: "diploma-57e14",
  storageBucket: "diploma-57e14.appspot.com",
  messagingSenderId: "129698936486",
  appId: "1:129698936486:web:3de0152394d59de2bce667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categoryCollection = collection (db, 'categories');