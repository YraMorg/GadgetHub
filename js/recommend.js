
const allProducts = [
  { name: "Чохол A2", category: "Чохли", image: "img/chohol-a1.jpg" },
  { name: "Навушники B3", category: "Навушники", image: "img/navushnyky-b2.jpg" },
  { name: "Годинник C4", category: "Годинники", image: "img/hodynnyk-c3.jpg" },
  { name: "Смартфон D5", category: "Смартфони", image: "img/smartfon-d4.jpg" },
];

function setCategory(category) {
  localStorage.setItem("selectedCategory", category);
  location.reload();
}

function loadRecommended() {
  const category = localStorage.getItem("selectedCategory");
  const container = document.getElementById("recommended-products");
  container.innerHTML = "";

  if (category) {
    const filtered = allProducts.filter(p => p.category === category);
    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product";
      card.innerHTML = \`<img src="\${product.image}" alt="\${product.name}"><h3>\${product.name}</h3>\`;
      container.appendChild(card);
    });
  }
}

window.onload = loadRecommended;
