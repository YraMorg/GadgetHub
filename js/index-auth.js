import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

// Firebase конфіг
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

// Отримуємо посилання
const registerLink = document.getElementById("registerLink");

if (registerLink) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Заміна на кнопку "Вийти"
      registerLink.textContent = "Вийти";
      registerLink.href = "#";
      registerLink.style.cursor = "pointer";

      const logoutHandler = (e) => {
        e.preventDefault();
        signOut(auth)
          .then(() => {
            location.reload(); // оновлення сторінки
          })
          .catch((error) => {
            console.error("Помилка при виході:", error);
          });
      };

      // Знімаємо попередні обробники, якщо є, і додаємо новий
      registerLink.removeEventListener("click", logoutHandler);
      registerLink.addEventListener("click", logoutHandler);
    } else {
      // Повернення до "Реєстрація"
      registerLink.textContent = "Реєстрація";
      registerLink.href = "auth.html";
    }
  });
}
