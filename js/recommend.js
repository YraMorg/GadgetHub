document.addEventListener("DOMContentLoaded", () => {
    const recommendedContainer = document.getElementById("recommended-products");

    // Категорії товарів із картинками (можна підключити до бази)
    const products = {
        "чохли": [
            { name: "Чохол X1", image: "img/case.jpg" },
            { name: "Чохол Y2", image: "img/case.jpg" }
        ],
        "навушники": [
            { name: "Навушники Z3", image: "img/headphones.jpg" },
            { name: "Навушники L5", image: "img/headphones.jpg" }
        ],
        "годинники": [
            { name: "Годинник Smart", image: "img/watch.jpg" },
            { name: "Годинник Pro", image: "img/watch.jpg" }
        ],
        "смартфони": [
            { name: "Смартфон E5", image: "img/phone.jpg" },
            { name: "Смартфон F6", image: "img/phone.jpg" }
        ]
    };

    // Отримуємо останню переглянуту категорію з localStorage
    const lastCategory = localStorage.getItem("lastCategory") || "чохли";
    const recommended = products[lastCategory] || [];

    recommended.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `<img src="\${product.image}" alt="\${product.name}"><h3>\${product.name}</h3>`;
        recommendedContainer.appendChild(card);
    });

    // Додаємо подію кліку на всі картки
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", () => {
            const category = card.getAttribute("data-category");
            if (category) {
                localStorage.setItem("lastCategory", category);
                location.reload();
            }
        });
    });
});