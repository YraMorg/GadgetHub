document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("CartLocalStorage")) || [];
  const container = document.getElementById("cart-container");
  const totalPriceElement = document.getElementById("totalPrice");
  container.innerHTML = "";

  if (cartItems.length === 0) {
    container.innerHTML = "<p class='cart-empty'>Кошик порожній.</p>";
    totalPriceElement.textContent = "";
    return;
  }

  let total = 0;

  cartItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "cart-item";
    const price = parseInt(item.price.replace(/\D/g, ""));

    total += price;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p><strong>Ціна:</strong> ${item.price}</p>
        <button onclick="removeFromCart(${index})">Видалити</button>
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
  loadCart(); // перезавантажити список
}
