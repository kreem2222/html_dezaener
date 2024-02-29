const products = [
    { name: "زيت زيتون", price: 10 },
    { name: "أرز", price: 5 },
    { name: "سكر", price: 7 }
];

const productsContainer = document.getElementById("products");

function displayProducts() {
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>السعر: ${product.price} دولار</p>
        `;
        productsContainer.appendChild(productElement);
    });
}

displayProducts();





