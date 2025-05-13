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
  
  if (user) {
    if (loginLink) loginLink.style.display = "none";
    if (registerLink) registerLink.style.display = "none";
    if (dashboardLink) dashboardLink.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "inline-block";

     // ✅ Якщо авторизований — оновлюємо кнопку
    if (startNowBtn) {
      startNowBtn.textContent = "Знайти місця";
      startNowBtn.onclick = () => {
        window.location.href = "search.html";
      };
    }
  } else {
    if (loginLink) loginLink.style.display = "inline-block";
    if (registerLink) registerLink.style.display = "inline-block";
    if (dashboardLink) dashboardLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";

    // 🔁 Якщо неавторизований — повертаємо стандартний текст
    if (startNowBtn) {
      startNowBtn.textContent = "Почати зараз";
      startNowBtn.onclick = () => {
        window.location.href = "auth.html";
      };
    }
  }
});

// Вихід
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth).then(() => {
      location.reload();
    });
  });
}

// Кнопка "Увійти / Реєстрація"
const authBtn = document.getElementById("authBtn");

if (authBtn) {
  authBtn.addEventListener("click", () => {
    window.location.href = "auth.html";
  });
}
