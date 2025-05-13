import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
const auth = getAuth();

export function registerUser() {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  const errorDiv = document.getElementById("register-error");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Користувача зареєстровано:", userCredential.user);
      alert("Реєстрація успішна!");
      window.location.href = "login.html"; // Перенаправлення на сторінку входу
    })
    .catch((error) => {
      errorDiv.textContent = error.message;
    });
}
