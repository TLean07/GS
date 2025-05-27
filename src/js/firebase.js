import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore }                from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getStorage }                  from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_ScC-ktu5NFh2NrG6fFVAI_W9F6VMeE4",
  authDomain: "hydrosafe-ff13a.firebaseapp.com",
  projectId: "hydrosafe-ff13a",
  storageBucket: "hydrosafe-ff13a.appspot.com",
  messagingSenderId: "379107872188",
  appId: "1:379107872188:web:01ae49779dfed932976fb9"
};

const app      = initializeApp(firebaseConfig);
export const auth     = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db       = getFirestore(app);
export const storage  = getStorage(app);
