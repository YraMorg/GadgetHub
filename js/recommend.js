
const productData = {
  case: [
    { name: "Чохол iPhone 13", price: "249 грн", image: "img/case1.jpg", link: "case1.html" },
    { name: "Чохол Samsung S22", price: "239 грн", image: "img/case2.jpg", link: "case2.html" },
    { name: "Прозорий чохол Xiaomi", price: "199 грн", image: "img/case3.webp", link: "case3.html" }
  ],
  charger: [
    { name: "Зарядка Baseus 20Вт", price: "649 грн", image: "img/charger1.webp", link: "charger1.html" },
    { name: "Бездротова зарядка Joyroom", price: "599 грн", image: "img/charger2.webp", link: "charger2.html" },
    { name: "USB-C адаптер 25Вт", price: "329 грн", image: "img/charger3.jpg", link: "charger3.html" },
    { name: "Автозарядка з 2 USB", price: "849 грн", image: "img/charger4.jpg", link: "charger4.html" }
  ],
  headphones: [
    { name: "Навушники TWS Pro", price: "1199 грн", image: "img/headphones1.png", link: "headphones1.html" },
    { name: "Навушники Xiaomi Redmi Buds", price: "999 грн", image: "img/headphones2.jpg", link: "headphones2.html" },
    { name: "Навушники Sony вакуумні", price: "699 грн", image: "img/headphones3.webp", link: "headphones3.html" },
    { name: "Навушники каплі JBL", price: "1399 грн", image: "img/headphones4.webp", link: "headphones4.html" }
  ],
  glass: [
    { name: "Захисне скло iPhone 13", price: "129 грн", image: "img/glass1.jpg", link: "glass1.html" },
    { name: "Скло 10H матове Samsung", price: "149 грн", image: "img/glass2.webp", link: "glass2.html" },
    { name: "3D Touch скло Xiaomi", price: "159 грн", image: "img/glass3.jpg", link: "glass3.html" },
    { name: "Глянцеве скло 9H", price: "179 грн", image: "img/glass4.png", link: "glass4.html" }
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
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.location.href = item.link;
    };
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width:100%; height:150px; object-fit:cover; border-radius:6px; margin-bottom: 0.5em;">
      <strong>${item.name}</strong><br><small>${item.price}</small>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadRecommendations);
