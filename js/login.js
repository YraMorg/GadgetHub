import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbv17e9KU79WSjkODDU0Hi_b9g2_vzPrk",
  authDomain: "gadgethub-44258.firebaseapp.com",
  projectId: "gadgethub-44258",
  storageBucket: "gadgethub-44258.firebasestorage.app",
  messagingSenderId: "231922939477",
  appId: "1:231922939477:web:01f9436b11c2ff2a9b86dc"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const errorDiv = document.getElementById("login-error");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Користувач увійшов:", userCredential.user);
      alert("Вхід успішний!");
      window.location.href = "index.html"; // Перенаправлення на головну сторінку
    })
    .catch((error) => {
      errorDiv.textContent = error.message;
    });
}
