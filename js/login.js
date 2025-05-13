import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
const auth = getAuth();

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
