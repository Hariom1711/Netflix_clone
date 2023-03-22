


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM6943BzQ6ZRk4Ae5XiehNvjnf2Ut0DFI",
  authDomain: "react-netflix-clone-ff6e9.firebaseapp.com",
  projectId: "react-netflix-clone-ff6e9",
  storageBucket: "react-netflix-clone-ff6e9.appspot.com",
  messagingSenderId: "701960329281",
  appId: "1:701960329281:web:c50fbe241605915be9cec0",
  measurementId: "G-KNTRRKY8TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);
