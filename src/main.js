const grid = document.getElementById("grid");

const generateProduct = (id) => ({
  id,
  name: `Product ${id}`,
  description: `Description for product ${id}`,
  price: `$${(Math.random() * 100).toFixed(2)}`,
});

const ROWS = 10;
const PRODUCTS_PER_ROW = 5;

const createRow = (rowIndex) => {
  const row = document.createElement("div");
  row.className = "row bg-white shadow rounded-lg p-4 flex gap-4";
  row.dataset.index = rowIndex;
  row.innerHTML = '<p class="text-gray-400">Loading...</p>';
  return row;
};

const renderProducts = (row, rowIndex) => {
  const startId = rowIndex * PRODUCTS_PER_ROW + 1;
  const products = Array.from({ length: PRODUCTS_PER_ROW }, (_, i) =>
    generateProduct(startId + i)
  );

  row.innerHTML = products
    .map(
      (product) => `
        <div class="product bg-gray-50 border rounded p-4 flex-1">
          <h3 class="text-lg font-semibold text-gray-800">${product.name}</h3>
          <p class="text-sm text-gray-600">${product.description}</p>
          <p class="text-blue-500 font-bold">${product.price}</p>
        </div>
      `
    )
    .join("");
};

const removeProducts = (row) => {
  row.innerHTML = '<p class="text-gray-400">Loading...</p>';
};

for (let i = 0; i < ROWS; i++) {
  grid.appendChild(createRow(i));
}

const observer = new IntersectionObserver(
  (entries) => {
    console.log("entries", entries);
    entries.forEach((entry) => {
      const row = entry.target;
      const rowIndex = parseInt(row.dataset.index, 10);

      if (entry.isIntersecting) {
        if (!row.dataset.loaded) {
          renderProducts(row, rowIndex);
          row.dataset.loaded = "true";
        }
      } else {
        if (row.dataset.loaded) {
          removeProducts(row);
          delete row.dataset.loaded;
        }
      }
    });
  },
  { threshold: 0.1, rootMargin: "-100px", root: ".scrolling-container" }
);

// Observe each row
document.querySelectorAll(".row").forEach((row) => observer.observe(row));

observer.unobserve();
