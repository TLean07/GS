// src/js/index.js

import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const authSection = document.getElementById("auth-section");
const userMenu    = document.getElementById("user-menu");
const userAvatar  = document.getElementById("user-avatar");
const dropdown    = document.getElementById("dropdown");
const logoutBtn   = document.getElementById("logoutBtn");
const DEFAULT_AVATAR = "/src/assets/img/default-avatar.jpg";

onAuthStateChanged(auth, user => {
  if (user) {
    authSection.style.display = "none";
    userMenu.style.display    = "flex";

    // se tiver photoURL (do Storage), usa. Senão, fallback para o default.
    userAvatar.src = user.photoURL || DEFAULT_AVATAR;
  } else {
    authSection.style.display = "flex";
    userMenu.style.display    = "none";
  }
});

userAvatar.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.reload();
});
