
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            id: "case1",
            name: "Силіконовий чохол",
            category: "Чохли",
            material: "Силікон",
            color: "Чорний",
            model: "iPhone 13"
        },
        {
            id: "charger1",
            name: "Бездротова зарядка",
            category: "Зарядки",
            power: "15W",
            type: "Бездротова",
            model: "Samsung"
        },
        {
            id: "glass1",
            name: "Захисне скло",
            category: "Скло",
            hardness: "9H",
            model: "iPhone 13",
            coating: "Олеофобне"
        }
    ];

    const categorySelect = document.getElementById("categoryFilter");
    const filterContainer = document.getElementById("additionalFilters");
    const productList = document.getElementById("productList");
    const priceRange = document.getElementById("priceRange");
    const priceValue = document.getElementById("priceValue");


    const filtersByCategory = {
        "Чохли": ["material", "color", "model"],
        "Зарядки": ["power", "type", "model"],
        "Скло": ["hardness", "model", "coating"]
    };

    priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  applyFilters(); // головна функція фільтрації
});

    function updateFilters(category) {
        filterContainer.innerHTML = "";
        if (!filtersByCategory[category]) return;

        filtersByCategory[category].forEach(filter => {
            const label = document.createElement("label");
            label.textContent = filter.charAt(0).toUpperCase() + filter.slice(1);
            const input = document.createElement("input");
            input.type = "text";
            input.dataset.filterKey = filter;
            filterContainer.appendChild(label);
            filterContainer.appendChild(input);
        });
    }

function applyFilters() {
  const category = getSelectedCategory(); // твоя функція вибору категорії
  const filters = getSelectedFilters();   // твоя функція вибору інших фільтрів

  const productElements = document.querySelectorAll(".product-card");
  const maxPrice = parseInt(priceRange.value);

  productElements.forEach((element) => {
    const product = JSON.parse(element.dataset.product); // якщо зберігаєш JSON в data-атрибуті
    const price = parseInt(element.querySelector(".price").textContent);

    const matchCategory = product.category === category;
    const matchFilters = Object.entries(filters).every(([key, value]) =>
    product.characteristics[key]?.toLowerCase().includes(value)
);
    const matchPrice = price <= maxPrice;

    element.style.display = matchCategory && matchFilters && matchPrice ? "block" : "none";
  });
}

function renderProducts(filteredProducts) {
  productList.innerHTML = "";

  filteredProducts.forEach(p => {
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



        productList.innerHTML = "";

        products
            .filter(p => p.category === category)
            .filter(p => {
                return Object.keys(criteria).every(key =>
                    p[key]?.toLowerCase().includes(criteria[key])
                );
            })
            .forEach(p => {
                const div = document.createElement("div");
                div.textContent = p.name;
                productList.appendChild(div);
            });
    }

    categorySelect.addEventListener("change", () => {
        updateFilters(categorySelect.value);
        applyFilters();
    });

    filterContainer.addEventListener("input", applyFilters);
});