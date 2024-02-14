// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEjPTmDT7gYTB6vIpNllr9k5X2hkqKBIg",
  authDomain: "netflix-clone-54e09.firebaseapp.com",
  projectId: "netflix-clone-54e09",
  storageBucket: "netflix-clone-54e09.appspot.com",
  messagingSenderId: "157025849273",
  appId: "1:157025849273:web:f914fa6534c1cc26d17068",
  measurementId: "G-J38SC203D6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth=getAuth();