const items = new Map([
    ['apple', 80.99],
    ['banana', 30.99],
    ['orange', 70.49]
]);

const cart = new Map();

function addToCart() {
    const selectedItem = document.getElementById('items').value;
    const quantity = parseInt(document.getElementById('quantity').value);

   if (cart.has(selectedItem)) {
        cart.set(selectedItem, cart.get(selectedItem) + quantity);
    } else {
        cart.set(selectedItem,quantity);
    }

 //  if(cart.has(selectedItem)) {
   //     cart.set(selectedItem, cart.get(selectedItem) + quantity);
}

  displayCart();


function displayCart() {
    const cartTable = document.getElementById('cart-table');
    const totalDiv = document.getElementById('total');

    // Clear the table
    cartTable.innerHTML = '<tr><th>Item</th><th>Quantity</th><th>Price</th><th>Total</th></tr>';

    let totalCost = 0;

    // calculate the table with cart items
    cart.forEach((quantity, item) => {
        const price = items.get(item);
        const totalItemCost = quantity * price;
        totalCost += totalItemCost;

        const row = document.createElement('tr');
        row.innerHTML = `<td>${item}</td><td>${quantity}</td><td>Rs${price.toFixed(2)}</td><td>Rs${totalItemCost.toFixed(2)}</td>`;
        cartTable.appendChild(row);
    });

    // Display total cost
    totalDiv.textContent = `Total: Rs${totalCost.toFixed(2)}`;
}
