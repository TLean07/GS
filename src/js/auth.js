import { auth, provider, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const form      = document.getElementById("authForm");
  const googleBtn = document.getElementById("googleSignIn");
  const isLogin   = location.pathname.includes("login");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const email    = form.email.value;
    const password = form.password.value;

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "../../index.html";
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const uref = doc(db, "users", cred.user.uid);
        await setDoc(uref, {
          email,
          photoURL: "src/assets/img/default-avatar.jpg",
          createdAt: new Date()
        });
        window.location.href = "login.html";
      }
    } catch (err) {
      alert(err.message);
    }
  });

  if (googleBtn) {
    googleBtn.addEventListener("click", async () => {
      try {
        provider.setCustomParameters({ prompt: "select_account" });
        const cred = await signInWithPopup(auth, provider);
        const uref = doc(db, "users", cred.user.uid);
        const snap = await getDoc(uref);
        if (!snap.exists()) {
          await setDoc(uref, {
            email: cred.user.email,
            photoURL: cred.user.photoURL || "src/assets/img/default-avatar.jpg",
            createdAt: new Date()
          });
        }
        window.location.href = "../../index.html";
      } catch (err) {
        alert(err.message);
      }
    });
  }
});
