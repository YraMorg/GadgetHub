
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

    const filtersByCategory = {
        "Чохли": ["material", "color", "model"],
        "Зарядки": ["power", "type", "model"],
        "Скло": ["hardness", "model", "coating"]
    };

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
        const category = categorySelect.value;
        const inputs = filterContainer.querySelectorAll("input");
        const criteria = {};
        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                criteria[input.dataset.filterKey] = input.value.trim().toLowerCase();
            }
        });

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