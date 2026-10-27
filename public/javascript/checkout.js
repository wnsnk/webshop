'use strict';
// TODO MAYBE DON'T USE cart.js for the checkout.php
let totalPrice = document.querySelector('#totalPrice').textContent;
totalPrice = Number(totalPrice.replace('€', ''));
const shippingCostTh = document.querySelector('#shippingCost');
shippingCostTh.textContent = `€ ${calcShippingCost(totalPrice)}`;

getUserInfo(12);

async function getUserInfo(userId) {
    try {
        const response = await fetch('/api/get_user.php', {
            method: 'POST',
            body: JSON.stringify({
                user_id: userId,
            }),
        });
        if (!response.ok) {
            console.log();
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        document.querySelector('#email').textContent = result['email_address'];
        document.querySelector('#streetNameWithNum').textContent =
            `${result['street_name']} ${result['house_number']}`;
        document.querySelector('#postcodeAndCity').textContent =
            `${result['postcode']}, ${result['city']} `;
    } catch (error) {
        console.error(error.message);
    }
}

function calcShippingCost(total) {
    return total < 50 ? 4.99 : 0;
}

function showTotalWithShipping() {
    // TODO
    // document.querySelector('#totalWithShipping').textContent =
    //     totalPrice + calcShippingCost(totalPrice);
}
showTotalWithShipping();
