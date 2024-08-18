document.addEventListener('DOMContentLoaded', function () {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    function generateSafeId(name) {
        return name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');
            const quantityInput = document.getElementById(`quantity-${generateSafeId(name)}`);

            if (!quantityInput) {
                console.error(`Quantity input not found for ${name}`);
                return;
            }

            const quantity = parseInt(quantityInput.value);

            if (isNaN(quantity) || quantity <= 0) {
                alert('Please enter a valid quantity.');
                return;
            }
            
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
            console.log(`Added ${quantity} ${name}(s) to cart. Current cart items:`, cartItems);
            alert(`${quantity} ${name}(s) added to your cart for Rs.${(price * quantity).toFixed(2)}!`);
        });
    });
});
