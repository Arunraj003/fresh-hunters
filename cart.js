let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

document.querySelector('.add-to-cart').addEventListener('click', function() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput.value;
    const price = 1.00; // Price of the apple

    // Create item object
    const item = {
        name: 'Apple',
        quantity: quantity,
        price: price,
        image: 'img1/apple.png'
    };
    
    // Add item to cart
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${quantity} Apple(s) added to your cart for $${(price * quantity).toFixed(2)}!`);

    // Handle order button
document.getElementById('order-button').addEventListener('click', function() {
    if (cartItems.length === 0) {
        alert("Your cart is empty.");
    } else {
        const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
        localStorage.setItem('totalPrice', totalPrice); // Store total price
        window.location.href = 'order-payment.html'; // Redirect to payment page
    }
});

});
