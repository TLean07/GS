import { auth, db, storage } from "./firebase.js";
import {
  onAuthStateChanged,
  updatePassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import {
  doc,
  updateDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const profilePreview   = document.getElementById("profilePreview");
  const changePhotoIcon  = document.getElementById("changePhotoIcon");
  const photoInput       = document.getElementById("photoInput");
  const passwordForm     = document.getElementById("passwordForm");
  const passwordInput    = passwordForm.newPassword;

  console.log("settings.js carregado");
  console.log("profilePreview:", profilePreview, "changePhotoIcon:", changePhotoIcon, "photoInput:", photoInput);
  onAuthStateChanged(auth, user => {
    if (!user) return window.location.href = "login.html";
    console.log("Usuário autenticado:", user.uid, "photoURL:", user.photoURL);
    if (user.photoURL) profilePreview.src = user.photoURL;
  });
  profilePreview.addEventListener("click", () => {
    console.log("clicou na imagem");
    photoInput.click();
  });
  changePhotoIcon.addEventListener("click", () => {
    console.log("clicou no ícone de câmera");
    photoInput.click();
  });
  photoInput.addEventListener("change", async () => {
    const file = photoInput.files[0];
    console.log("arquivo selecionado:", file);
    if (!file) return;

    try {
      const ref = storageRef(storage, `avatars/${auth.currentUser.uid}/${file.name}`);
      console.log("fazendo upload para:", ref.fullPath);
      await uploadBytes(ref, file);
      const url = await getDownloadURL(ref);
      console.log("URL obtida:", url);
      await updateProfile(auth.currentUser, { photoURL: url });
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        photoURL: url,
        updatedAt: serverTimestamp()
      });
      profilePreview.src = url;
      alert("Foto atualizada com sucesso!");
    } catch (err) {
      console.error("Erro no upload de avatar:", err);
      alert("Erro ao atualizar foto: " + err.message);
    }
  });
  passwordForm.addEventListener("submit", async e => {
    e.preventDefault();
    try {
      await updatePassword(auth.currentUser, passwordInput.value);
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        passwordLastUpdated: serverTimestamp()
      });
      alert("Senha atualizada com sucesso!");
      passwordInput.value = "";
    } catch (err) {
      console.error("Erro ao atualizar senha:", err);
      alert(err.message);
    }
  });
});
