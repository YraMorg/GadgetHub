import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBbv17e9KU79WSjkODDU0Hi_b9g2_vzPrk",
  authDomain: "gadgethub-44258.firebaseapp.com",
  projectId: "gadgethub-44258",
  storageBucket: "gadgethub-44258.appspot.com",
  messagingSenderId: "231922939477",
  appId: "1:231922939477:web:01f9436b11c2ff2a9b86dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerLink = document.getElementById("registerLink");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Замість "Реєстрація" показати "Вийти"
    registerLink.textContent = "Вийти";
    registerLink.href = "#";
    registerLink.addEventListener("click", (e) => {
      e.preventDefault();
      signOut(auth).then(() => location.reload());
    });
  } else {
    // Якщо не авторизований, повернути "Реєстрація"
    registerLink.textContent = "Реєстрація";
    registerLink.href = "auth.html";
  }
});
