// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB_NdOSJNBx7w4nlhmBYyeQ8z834Odzrw",
  authDomain: "inventory-management-6c699.firebaseapp.com",
  projectId: "inventory-management-6c699",
  storageBucket: "inventory-management-6c699.appspot.com",
  messagingSenderId: "125129853400",
  appId: "1:125129853400:web:b619754b3f22248b564aad",
  measurementId: "G-VMCSEY6ZE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}
