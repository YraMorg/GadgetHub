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

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Елементи
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const dashboardLink = document.getElementById("dashboardLink");
const logoutBtn = document.getElementById("logoutBtn");

// Слухаємо стан авторизації
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Авторизований
    loginLink.style.display = "none";
    registerLink.style.display = "none";
    logoutBtn.style.display = "inline";
    dashboardLink.style.display = "inline";
  } else {
    // Не авторизований
    loginLink.style.display = "inline";
    registerLink.style.display = "inline";
    logoutBtn.style.display = "none";
    dashboardLink.style.display = "none";
  }
});

// Обробка кнопки виходу
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    location.reload();
  });
});
