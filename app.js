const products = [
    {
        name: "Fine Line Vinyl",
        price: 29.99,
        emoji: "💿"
    },
    {
        name: "Cherry Baby Tee",
        price: 24.99,
        emoji: "🍒"
    },
    {
        name: "Golden Sunglasses",
        price: 18.99,
        emoji: "☀️"
    },
    {
        name: "Watermelon Sugar Tote",
        price: 16.99,
        emoji: "🍉"
    },
    {
        name: "Love On Tour Hoodie",
        price: 49.99,
        emoji: "🎤"
    },
    {
        name: "Pink Feather Boa",
        price: 12.99,
        emoji: "🪶"
    }
];
const productList = document.querySelector("#product-list");
const productHTML = products.map(product => {
    return `
        <div class="product-card">
            <div class="product-emoji">${product.emoji}</div>
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
        </div>
    `;
}).join("");
productList.innerHTML = productHTML;
