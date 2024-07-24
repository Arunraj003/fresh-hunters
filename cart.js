let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to generate a safe ID for quantity inputs
function generateSafeId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        const image = this.getAttribute('data-image');
        const quantityInput = document.getElementById(`quantity-${generateSafeId(name)}`);
        const quantity = parseInt(quantityInput.value);

        // Check if item already exists in the cart
        const existingItem = cartItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            const item = {
                name: name,
                quantity: quantity,
                price: price,
                image: image
            };
            cartItems.push(item);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${quantity} ${name}(s) added to your cart for $${(price * quantity).toFixed(2)}!`);
    });
});
