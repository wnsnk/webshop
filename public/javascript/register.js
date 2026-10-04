'use strict';

import FormValidator from './modules/validate_form.js';
const formValidator = new FormValidator();

// console.log('tet');

const eMailInput = document.querySelector('#floatingInput');
const pass0Input = document.querySelector('#floatingPassword0');
const pass1Input = document.querySelector('#floatingPassword1');
const registerBtn = document.querySelector('#registerBtn');
const warningsDiv = document.querySelector('#warnings');

const postCodeInput = document.querySelector('#postcode');
const houseNumberInput = document.querySelector('#houseNumber');
const fillAddressBtn = document.querySelector('#fillAddress');
const streetNameInput = document.querySelector('#streetName');
const cityInput = document.querySelector('#city');

registerBtn.addEventListener('click', function () {
    // clear warnings
    warningsDiv.innerHTML = '';
    // check if inputs are filled
    if (!eMailInput.value) {
        warningsDiv.appendChild(
            formValidator.createWarningElement(
                'Email address can not be empty!',
            ),
        );
    }

    if (!pass0Input.value || !pass1Input.value) {
        warningsDiv.appendChild(
            formValidator.createWarningElement('Password can not be empty!'),
        );
    }

    const passwordValidation = formValidator.validatePassword(pass0Input.value);
    if (!passwordValidation[0]) {
        warningsDiv.appendChild(
            formValidator.createWarningElement(passwordValidation[1]),
        );
    }

    // CHECK IF PASSWORDS MATCH
    const passwordsMatch = pass0Input.value === pass1Input.value ? true : false;

    if (!passwordsMatch) {
        warningsDiv.appendChild(
            formValidator.createWarningElement('Passwords do not match!'),
        );
    }
});

fillAddressBtn.addEventListener('click', function () {
    streetNameRequest(postCodeInput.value, houseNumberInput.value);
});

async function streetNameRequest(postCode, houseNum) {
    try {
        const response = await fetch('/api/get_address.php', {
            method: 'GET',
            headers: {
                postcode: postCode,
                houseNumber: houseNum,
            },
        });
        if (!response.ok) {
            console.log();
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        if (result['street'] && result['city']) {
            streetNameInput.value = result['street'];
            cityInput.value = result['city'];
        }
    } catch (error) {
        console.error(error.message);
    }
}
