document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("categoryFilter");
  const filterContainer = document.getElementById("additionalFilters");
  const productList = document.getElementById("productList");
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  const filtersByCategory = {
    case: ["color", "material", "model"],
    charger: ["type", "power", "model"],
    glass: ["hardness", "model", "coating"],
    headphones: ["type", "model"]
  };

  // Показати поточне значення ціни
  priceRange.addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
    applyFilters();
  });

  // Оновлення фільтрів при зміні категорії
  categorySelect.addEventListener("change", () => {
    updateFilters(categorySelect.value);
    applyFilters();
  });

  // Оновлення фільтра при вводі значення
  filterContainer.addEventListener("input", applyFilters);

  // Створює динамічні поля фільтрів
  function updateFilters(category) {
    filterContainer.innerHTML = "";
    if (!filtersByCategory[category]) return;

    filtersByCategory[category].forEach((filterKey) => {
      const label = document.createElement("label");
      label.textContent = filterKey.charAt(0).toUpperCase() + filterKey.slice(1);
      const input = document.createElement("input");
      input.type = "text";
      input.dataset.filterKey = filterKey;

      filterContainer.appendChild(label);
      filterContainer.appendChild(input);
    });
  }

  // Отримує вибрану категорію
  function getSelectedCategory() {
    return categorySelect.value;
  }

  // Збирає всі введені значення фільтрів
  function getSelectedFilters() {
    const inputs = filterContainer.querySelectorAll("input");
    const filters = {};
    inputs.forEach((input) => {
      if (input.value.trim() !== "") {
        filters[input.dataset.filterKey] = input.value.trim().toLowerCase();
      }
    });
    return filters;
  }

  // Рендер товарів
  function renderProducts(productArray) {
    productList.innerHTML = "";

    if (productArray.length === 0) {
      productList.innerHTML = "<p>Товарів не знайдено.</p>";
      return;
    }

    productArray.forEach((p) => {
      const div = document.createElement("div");
      div.classList.add("product-card");
      div.dataset.product = JSON.stringify(p);

      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h3>${p.name}</h3>
        <p>Ціна: <span class="price">${p.price}</span> грн</p>
      `;

      productList.appendChild(div);
    });
  }

  // Основна функція фільтрації
  function applyFilters() {
    const category = getSelectedCategory();
    const filters = getSelectedFilters();
    const maxPrice = parseInt(priceRange.value);

    const filtered = products.filter((product) => {
      const matchCategory = product.category === category;
      const matchFilters = Object.entries(filters).every(([key, value]) =>
        product.characteristics?.[key]?.toLowerCase().includes(value)
      );
      const matchPrice = product.price <= maxPrice;

      return matchCategory && matchFilters && matchPrice;
    });

    renderProducts(filtered);
  }

  // Початкова ініціалізація
  updateFilters(getSelectedCategory());
  applyFilters();
});
