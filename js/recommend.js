// Функція для побудови векторів з характеристик
function buildVector(characteristics) {
  const vector = [];

  for (const key in characteristics) {
    const value = characteristics[key];
    vector.push(String(key) + ':' + String(value).toLowerCase());
  }

  return vector;
}

// Функція для підрахунку косинусної схожості
function cosineSimilarity(vecA, vecB) {
  const setA = new Set(vecA);
  const setB = new Set(vecB);

  const intersection = [...setA].filter(x => setB.has(x));
  const similarity = intersection.length / Math.sqrt(setA.size * setB.size);

  return similarity;
}

// Отримуємо вибраний товар з localStorage
const selectedProductId = localStorage.getItem("selectedProductId");
const selectedProduct = products.find(p => p.id === selectedProductId);

// Пошук рекомендацій
if (selectedProduct) {
  const selectedVector = buildVector(selectedProduct.characteristics);

  const similarProducts = products
    .filter(p => p.id !== selectedProduct.id && p.category === selectedProduct.category)
    .map(p => {
      return {
        ...p,
        similarity: cosineSimilarity(selectedVector, buildVector(p.characteristics))
      };
    })
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 4); // Виводимо 4 найсхожіших

  // Вивід на сторінку
  const container = document.getElementById("recommendations");
  container.innerHTML = "";

  similarProducts.forEach(p => {
    const productEl = document.createElement("a");
    productEl.className = "product";
    productEl.href = `${p.id}.html`; // Перехід на сторінку товару

    productEl.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <p>${p.name}</p>
    `;

    container.appendChild(productEl);
  });
}
