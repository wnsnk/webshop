'use strict';

import ShoppingCart from './modules/shopping_cart.js';
import { createElementWithClass } from './modules/elements.js';
const cart = new ShoppingCart();

const itemsDiv = document.querySelector('#items');
console.log(cart.items);
showShoppingCart();
function showShoppingCart() {
    const tbodyElement = document.querySelector('tbody');
    tbodyElement.innerHTML = '';
    for (let product of cart.items['shoppingCart']) {
        product = JSON.parse(product);

        const trElement = createElementWithClass('tr', 'text-content-center');

        const idElement = document.createElement('th');
        idElement.scope = 'row';
        idElement.textContent = product['id'];
        trElement.appendChild(idElement);

        const nameElement = document.createElement('td');
        nameElement.scope = 'col';
        nameElement.textContent = product['productName'];
        trElement.appendChild(nameElement);

        const sizeElement = document.createElement('td');
        sizeElement.scope = 'col';
        sizeElement.textContent = product['size'];
        trElement.appendChild(sizeElement);

        const amountElement = document.createElement('td');
        amountElement.scope = 'col';
        amountElement.textContent = product['amount'];
        trElement.appendChild(amountElement);

        const priceElement = document.createElement('td');
        priceElement.scope = 'col';
        priceElement.textContent = product['price'];
        trElement.appendChild(priceElement);

        const deleteTdElement = document.createElement('td');
        deleteTdElement.scope = 'col';
        const deleteBtn = createElementWithClass('button', 'btn-close');
        deleteBtn.addEventListener('click', function () {
            // DELETE FROM SHOPPING CART
            cart.remove(product);
            showShoppingCart();
        });
        deleteTdElement.appendChild(deleteBtn);
        trElement.appendChild(deleteTdElement);

        tbodyElement.appendChild(trElement);
    }
}
