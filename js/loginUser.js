import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// 🔽 УСТАНОВИ СВОЇ ДАНІ ТУТ
const firebaseConfig = {
  apiKey: "AIzaSyBbv17e9KU79WSjkODDU0Hi_b9g2_vzPrk",
  authDomain: "gadgethub-44258.firebaseapp.com",
  projectId: "gadgethub-44258",
  storageBucket: "gadgethub-44258.firebasestorage.app",
  messagingSenderId: "231922939477",
  appId: "1:231922939477:web:01f9436b11c2ff2a9b86dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Реєстрація (для sing-in.html)
export function registerUser() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const errorDiv = document.getElementById("register-error");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Користувача зареєстровано:", userCredential.user);
      alert("Реєстрація успішна!");
      window.location.href = "catalog.html"; // Перенаправлення після реєстрації
    })
    .catch((error) => {
      errorDiv.textContent = error.message;
    });
}

// Вхід (для login.html)
export function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorDiv = document.getElementById("login-error");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Користувач увійшов:", userCredential.user);
      alert("Вхід успішний!");
      window.location.href = "catalog.html"; // Перенаправлення після входу
    })
    .catch((error) => {
      errorDiv.textContent = error.message;
    });
}
