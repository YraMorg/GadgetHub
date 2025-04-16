
const productData = {
  case: [
    { name: "Чохол iPhone 13", price: "249 грн" },
    { name: "Чохол Samsung S22", price: "239 грн" },
    { name: "Прозорий чохол Xiaomi", price: "199 грн" }
  ],
  charger: [
    { name: "Зарядка Baseus 20Вт", price: "649 грн" },
    { name: "Бездротова зарядка Joyroom", price: "599 грн" },
    { name: "USB-C адаптер 25Вт", price: "329 грн" }
  ],
  headphones: [
    { name: "Навушники TWS Pro", price: "1199 грн" },
    { name: "Навушники Xiaomi Redmi Buds", price: "999 грн" },
    { name: "Навушники Sony вакуумні", price: "699 грн" }
  ],
  glass: [
    { name: "Захисне скло iPhone 13", price: "129 грн" },
    { name: "Скло 10H матове Samsung", price: "149 грн" },
    { name: "3D Touch скло Xiaomi", price: "159 грн" }
  ]
};

function loadRecommendations() {
  const category = localStorage.getItem("selectedCategory");
  const container = document.getElementById("recommended");
  container.innerHTML = "";

  if (!category || !productData[category]) {
    container.innerHTML = "<div class='product'>Немає рекомендацій — перейдіть до каталогу</div>";
    return;
  }

  productData[category].forEach(item => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `<strong>${item.name}</strong><br><small>${item.price}</small>`;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadRecommendations);
