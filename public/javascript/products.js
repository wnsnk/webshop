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
        showProducts(results, columns, 'sortNewOld');

        const sortDropDownBtns = document.querySelectorAll('.sortDropDown');
        for (let sortDropdownElement of sortDropDownBtns) {
            sortDropdownElement.addEventListener('click', function () {
                productsDiv.innerHTML = '';
                columns = calcColumns();
                showProducts(results, columns, sortDropdownElement.id);
            });
        }

        window.addEventListener('resize', function () {
            productsDiv.innerHTML = '';
            columns = calcColumns();
            console.log(columns);
            showProducts(results, columns, 'sortNewOld');
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

function showProducts(results, columns, sortBy) {
    let columnsCount = 0;
    results = sortProducts(results, sortBy);

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
        paragraphEl.textContent = `€${result['product_price'].replace('.', ',')}`;
        cardBodyEl.appendChild(paragraphEl);
        const aBtnEl = createElementWithClass('a', 'btn btn-primary');
        aBtnEl.textContent = 'Bekijk product';
        aBtnEl.href = `/product.php?product=${result['id']}`;
        cardBodyEl.appendChild(aBtnEl);
        rowElement.appendChild(cardEl);
        columnsCount++;
        if (columnsCount === columns) {
            columnsCount = 0;
        }
    }
}

/**
 * Sorts an array of products
 * @param {Array} products - Array of products.
 * * @param {string} sortMethod - The method of sorting.
 * @returns {Array} A sorted products array
 */
function sortProducts(products, sortMethod) {
    switch (sortMethod) {
        case 'sortOldNew':
            products.sort(function (a, b) {
                return a.id - b.id;
            });
            break;
        case 'sortNewOld':
            products.sort(function (a, b) {
                return a.id - b.id;
            });
            products.reverse();
            break;
        case 'sortPriceLowHigh':
            products.sort(function (a, b) {
                return a.product_price - b.product_price;
            });
            break;
        case 'sortPriceHighLow':
            products.sort(function (a, b) {
                return a.product_price - b.product_price;
            });
            products.reverse();
            break;
        case 'sortNameAZ':
            products.sort((a, b) =>
                a.product_name.localeCompare(b.product_name),
            );
            break;
        case 'sortNameZA':
            products.sort((a, b) =>
                a.product_name.localeCompare(b.product_name),
            );
            products.reverse();
            break;
    }
    return products;
}
