// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJIVv2UUMrLoKs3rd761eIXe54FXlTgiE",
  authDomain: "kpnclient-f6a24.firebaseapp.com",
  projectId: "kpnclient-f6a24",
  storageBucket: "kpnclient-f6a24.appspot.com",
  messagingSenderId: "807001201973",
  appId: "1:807001201973:web:6fe415bf44029f1547007c",
  measurementId: "G-RMCVV9GR16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
