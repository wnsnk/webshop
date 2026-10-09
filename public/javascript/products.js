'use strict';
import { createElementWithClass } from './modules/elements.js';
// const { cloneElement } = require('react');

let columns, rowElement;
const productsDiv = document.querySelector('.products');

async function getProducts() {
    try {
        const response = await fetch('/api/get_products.php', {
            method: 'GET',
        });
        if (!response.ok) {
            console.log();
            throw new Error(`Response status: ${response.status}`);
        }
        const results = await response.json();
        console.log(results);
        columns = calcColumns();
        showProducts(results, columns);

        window.addEventListener('resize', function () {
            productsDiv.innerHTML = '';
            columns = calcColumns();
            console.log(columns);
            showProducts(results, columns);
        });
    } catch (error) {
        console.error(error.message);
    }
}
getProducts();

function calcColumns() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1400) {
        return 4;
    } else if (window.innerWidth > 1000) {
        return 3;
    } else if (window.innerWidth > 800) {
        return 2;
    } else {
        return 1;
    }
}

function showProducts(results, columns) {
    let columnsCount = 0;

    for (const result of results) {
        if (columnsCount === 0) {
            rowElement = createElementWithClass(
                'div',
                'row justify-content-center',
            );
            productsDiv.appendChild(rowElement);
        }
        const cardEl = createElementWithClass('div', 'card col');
        cardEl.style = 'max-width: 300px; margin: 10px';
        const imgEl = createElementWithClass('img', 'card-img-top');
        imgEl.src = result['img_url'];
        cardEl.appendChild(imgEl);
        const cardBodyEl = createElementWithClass('div', 'card-body');
        cardEl.appendChild(cardBodyEl);
        const h4El = createElementWithClass('h4', 'card-title');
        h4El.textContent = result['product_name'];
        cardBodyEl.appendChild(h4El);
        const paragraphEl = createElementWithClass('p', 'card-text');
        paragraphEl.textContent = result['product_description'];
        cardBodyEl.appendChild(paragraphEl);
        const aBtnEl = createElementWithClass('a', 'btn-solid theme-primary');
        aBtnEl.textContent = 'test';
        cardBodyEl.appendChild(aBtnEl);
        rowElement.appendChild(cardEl);
        columnsCount++;
        if (columnsCount === columns) {
            columnsCount = 0;
        }
    }
}
