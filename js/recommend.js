// Обчислення схожості з вагами
function weightedSimilarity(charA, charB) {
  const weights = {
    model: 3,
    type: 1,
    color: 1,
    material: 1,
    power: 1,
    coating: 1,
    hardness: 1
  };

  let score = 0;
  let maxScore = 0;

  for (const key in weights) {
    const weight = weights[key];
    maxScore += weight;

    if (
      charA[key] &&
      charB[key] &&
      charA[key].toLowerCase() === charB[key].toLowerCase()
    ) {
      score += weight;
    }
  }

  return score / maxScore;
}

// Отримання збереженого товару з localStorage
const selectedProductId = localStorage.getItem("selectedProductId");
const selectedProduct = products.find((p) => p.id === selectedProductId);

if (selectedProduct) {
  const similarProducts = products
    .filter((p) => p.id !== selectedProduct.id)
    .map((p) => {
      return {
        ...p,
        similarity: weightedSimilarity(
          selectedProduct.characteristics,
          p.characteristics
        )
      };
    })
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, 4);

  const container = document.getElementById("recommendations");
  container.innerHTML = "";

  similarProducts.forEach((p) => {
    const productEl = document.createElement("a");
    productEl.href = `${p.id}.html`;
    productEl.className = "product";

    productEl.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <p>${p.name}</p>
    `;

    container.appendChild(productEl);
  });
}
