
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCr6QA8hSE2hMzLIA7zODUX11F6eOci8ew",
    authDomain: "whatsappwebclonenew.firebaseapp.com",
    projectId: "whatsappwebclonenew",
    storageBucket: "whatsappwebclonenew.appspot.com",
    messagingSenderId: "1042156909041",
    appId: "1:1042156909041:web:a9369f00593aba882b9450"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
