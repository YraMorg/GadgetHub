document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("CartLocalStorage")) || [];
  const container = document.getElementById("cartContainer");
  const totalPriceElement = document.getElementById("totalPrice");
  container.innerHTML = "";

  if (cartItems.length === 0) {
    container.innerHTML = "<p class='cart-empty'>Кошик порожній.</p>";
    totalPriceElement.textContent = "";
    return;
  }

  let total = 0;

  cartItems.forEach((item, index) => {
    const price = parseInt(item.price.replace(/\D/g, ""));
    total += price;

    const card = document.createElement("div");
    card.className = "cart-item";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price}</div>
        <button onclick="removeFromCart(${index})" style="margin-top: 0.5rem; background:#ef4444; border:none; color:white; padding:0.5rem 1rem; border-radius:6px; cursor:pointer;">Видалити</button>
      </div>
    `;

    container.appendChild(card);
  });

  totalPriceElement.textContent = `Загальна сума: ${total} грн`;
}

function removeFromCart(index) {
  let cartItems = JSON.parse(localStorage.getItem("CartLocalStorage")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("CartLocalStorage", JSON.stringify(cartItems));
  loadCart();
}

document.getElementById("clearCartBtn").addEventListener("click", () => {
  localStorage.removeItem("CartLocalStorage");
  loadCart();
});
