const orderButtons = document.querySelectorAll('.order-button');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

let cart = [];
let total = 0;

orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const price = Math.random() * 20 + 5; // Preço aleatório para exemplo
        cart.push({ item, price });
        updateCart();
    });
});

checkoutButton.addEventListener('click', () => {
    alert('Pedido finalizado! Total: R$' + total.toFixed(2));
    cart = [];
    total = 0;
    updateCart();
});

function updateCart() {
    cartItems.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.item} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}
