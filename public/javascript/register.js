'use strict';
import {
    validatePassword,
    createWarningElement,
} from './modules/validate_form.js';

// console.log('tet');

const eMailInput = document.querySelector('#floatingInput');
const pass0Input = document.querySelector('#floatingPassword0');
const pass1Input = document.querySelector('#floatingPassword1');
const registerBtn = document.querySelector('#registerBtn');
const warningsDiv = document.querySelector('#warnings');

registerBtn.addEventListener('click', function () {
    // clear warnings
    warningsDiv.innerHTML = '';
    // check if inputs are filled
    if (!eMailInput.value) {
        warningsDiv.appendChild(
            createWarningElement('Email address can not be empty!'),
        );
    }
    if (!pass0Input.value || !pass1Input.value) {
        warningsDiv.appendChild(
            createWarningElement('Password can not be empty!'),
        );
    }

    const passwordValidation = validatePassword(pass0Input.value);
    console.log(passwordValidation);
    if (!passwordValidation[0]) {
        warningsDiv.appendChild(createWarningElement(passwordValidation[1]));
    }

    // CHECK IF PASSWORDS MATCH
    const passwordsMatch = pass0Input.value === pass1Input.value ? true : false;

    if (!passwordsMatch) {
        warningsDiv.appendChild(
            createWarningElement('Passwords do not match!'),
        );
    }
});
