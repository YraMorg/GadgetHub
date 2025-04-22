document.addEventListener("DOMContentLoaded", loadCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem("CartLocalStorage")) || [];
  const container = document.getElementById("cartContainer");
  const totalPriceElement = document.getElementById("totalPrice");
  container.innerHTML = "";

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Кошик порожній.</p>";
    totalPriceElement.textContent = "";
    return;
  }

  let total = 0;

  cartItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "product";
    card.style.position = "relative";
    const price = parseInt(item.price.replace(/\D/g, ""));

    total += price;

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:100%; height:150px; object-fit:cover; border-radius:6px; margin-bottom: 0.5em;">
      <strong>${item.name}</strong><br>
      <small>${item.price}</small><br>
      <button style="margin-top: 0.5em;" onclick="removeFromCart(${index})">Видалити</button>
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
