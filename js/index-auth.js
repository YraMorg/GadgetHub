import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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

// Вибираємо елементи
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");
const dashboardLink = document.getElementById("dashboardLink");
const logoutBtn = document.getElementById("logoutBtn");
const startNowBtn = document.getElementById("startNowBtn");

onAuthStateChanged(auth, (user) => {
  console.log("Стан авторизації:", user); // Для перевірки
  
  import { auth, onAuthStateChanged, signOut } from './firebase.js';

const registerLink = document.getElementById("registerLink");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Якщо користувач авторизований
    registerLink.style.display = "none";
    logoutBtn.style.display = "inline";
  } else {
    // Якщо користувач не авторизований
    registerLink.style.display = "inline";
    logoutBtn.style.display = "none";
  }
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    location.reload(); // Оновити сторінку після виходу
  });
});
